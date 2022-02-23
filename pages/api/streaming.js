const cron = require('node-cron');
const axios = require('axios')

import { getAndConnectToClient, getYoutubeStreamFromDatabase, updateYoutubeStream } from '../../db/dbFunctions';

async function updateVideoIdFromAPI() {
    let client = getAndConnectToClient()
    let videoId = await getYoutubeStreamFromDatabase(client)
    let channelId = "UCYRxyoQ0THt7m3pruEKNw3A";
    let apiKey = process.env.YT_API_KEY;
    let queryString = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=" + channelId + "&eventType=live&type=video&key=" + apiKey;

    axios.get(queryString).then(response => {
        if (response.status.valueOf() !== 403) {
            console.log("Received the following from Youtube API: ")
            console.log(response.data)

            let youtube = response.data;

            if (youtube.items !== null) {
                if (youtube.items.length > 0) {
                    videoId = youtube.items[0].id.videoId;
                } else if (videoId === null || videoId === '') {
                    videoId = "0M8uRqczwbY";
                }

                updateYoutubeStream(client, videoId).then(res => {
                    client.end()
                })
            } else {
                console.log("Error reading items from response data.")
                client.end()
            }
        } else {
            console.log("Quota reached for Youtube API.")
            client.end()
        }
    }).catch(error => {
        console.log("API Refresh Error: " + error.message);
        client.end()
    });
}

let ytRefreshSchedule = cron.schedule('*/15 * * * *', () => {
    updateVideoIdFromAPI().then(r => {
        console.log("Executed scheduled task.")
    })
}, {
    scheduled: true,
    timezone: "America/Los_Angeles"
})

ytRefreshSchedule.start()

updateVideoIdFromAPI().then(r => {
    console.log("Force execute Youtube Refresh API after build.")
})

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    let client = getAndConnectToClient()

    getYoutubeStreamFromDatabase(client).then(response => {
        res.status(200).json({
            videoId: response
        })
    }).catch(err => {
        res.status(500).json({
            message: err.message
        })
    })
}  