const cron = require('node-cron');
const axios = require('axios');
const Streaming = require("./models/Streaming");
const { sequelize } = require('./db');

async function syncClient() {
    await sequelize.sync({ alter: true }).catch(e => {
        console.error("[SYNC-CLIENT]: Cannot connect to database.")
        console.error("[SYNC-CLIENT]:", e.message)
    })

    console.log("[SYNC-CLIENT]: Successfully synced tables!")
}

async function getYoutubeStreamFromDatabase() {
    let data = await Streaming.findAll({
        limit: 1,
        order: [['createdAt', 'DESC']]
    }).catch(e => {
        console.error("[GET-YT-STREAM] Query Error: " + e.message)
        return null
    });

    if (data.length > 0) {
        //console.log("[GET-YT-STREAM]:", data[0].livestream_id)
        return data[0].livestream_id
    } else {
        return null
    }
}

// TODO: Make cleanup function to delete all livestream ids that are older than a certain time.

async function updateYoutubeStream(videoId) {
    syncClient().then(_ => {
        Streaming.count({
            where: {
                livestream_id: videoId
            }
        }).then(res => {
            console.log("[Update-YT-Stream]: Is Unique:", res <= 1)
            if (res <= 1) {
                Streaming.create({
                    id: null,
                    livestream_id: videoId
                }).then(res => {
                    console.log("[Update-YT-Stream] Updated livestream id to:", videoId)
                    return videoId
                }).catch(e => {
                    console.error("[Update-YT-Stream] Query Error: " + e.message)
                    return null
                })
            }
        }).catch(e => {
            console.error("[Update-YT-Stream] Query Error: " + e.message)
            return null
        })
    }).catch(e => {
        console.error("[Update-YT-Stream] Sync Error: " + e.message)
        return null
    })
}

async function updateVideoIdFromAPI() {
    let videoId = await getYoutubeStreamFromDatabase()
    let channelId = "UCYRxyoQ0THt7m3pruEKNw3A";
    let apiKey = process.env.YT_API_KEY;
    let queryString = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=" + channelId + "&eventType=live&type=video&key=" + apiKey;

    axios.get(queryString).then(response => {
        if (response.status.valueOf() !== 403) {
            console.log("[YT-API]: Received the following from Youtube API: ")
            console.log(response.data)

            let youtube = response.data;

            if (youtube.items !== null) {
                if (youtube.items.length > 0) {
                    videoId = youtube.items[0].id.videoId;
                    console.log("[YT-API]: New videoId: " + videoId)
                    updateYoutubeStream(videoId)
                } else {
                    console.error("[YT-API]: No new items to update.")
                    updateYoutubeStream("XdMBqIeeADA")
                }
            } else {
                console.error("[YT-API]: Error reading items from response data.")
            }
        } else {
            console.error("[YT-API]: Quota reached for Youtube API.")
        }
    }).catch(e => {
        console.error("[YT-API]: API Refresh Error: " + e.message);
    });
}

let ytRefreshSchedule = cron.schedule('*/15 * * * *', () => {
    updateVideoIdFromAPI().then(_ => {
        console.log("[CRON]: Executed scheduled task.")
    })
}, {
    scheduled: true,
    timezone: "America/Los_Angeles"
})

ytRefreshSchedule.start()

updateVideoIdFromAPI().then(_ => {
    console.log("[CRON]: Force execute Youtube Refresh API after build.")
})

syncClient().then(_ => {
    console.log("[Sequelize]: Force sync client after build.")
})

module.exports = { getYoutubeStreamFromDatabase, updateYoutubeStream, updateVideoIdFromAPI }