import { getYoutubeStreamFromDatabase } from '../../db/dbFunctions';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    getYoutubeStreamFromDatabase().then(response => {
        console.log("[streaming.js]:", response)
        res.status(200).json({
            videoId: response
        })
    }).catch(err => {
        res.status(500).json({
            message: err.message
        })
    })
}