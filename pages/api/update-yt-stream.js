import { updateVideoIdFromAPI } from '../../db/dbFunctions';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// https://github.com/paulphys/nextjs-cron

const update_stream = (req, res) => {
    let APP_KEY = process.env.APP_KEY;
    let ACTION_KEY = req.headers.authorization.split(" ")[1];

    try {
        if (ACTION_KEY === APP_KEY) {
            // Process the POST request
            updateVideoIdFromAPI().then(_ => {
                res.status(200).json({ success: 'true' })
            }).catch(_ => {
                res.status(500).json({ success: 'false' })
            })
        } else {
            res.status(401).json({ success: 'false' })
        }
    } catch (err) {
        res.status(500).json({ success: 'false' })
    }
}

export default update_stream;