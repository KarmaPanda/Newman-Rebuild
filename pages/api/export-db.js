// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// https://github.com/paulphys/nextjs-cron

const Donations = require("../../db/models/Donations");

import { syncClient } from '../../db/dbFunctions';

// TODO: Implement rate-limiter so password cannot be cracked by running many attempts.
const export_db = (req, res) => {
    let APP_KEY = process.env.APP_KEY;
    let ACTION_KEY = undefined

    if (req.headers.authorization != undefined) {
        ACTION_KEY = req.headers.authorization.split(" ")[1];
    }

    let APP_PASSWORD = process.env.APP_PASSWORD
    let PASSWORD = req.query.password

    try {
        if (ACTION_KEY === APP_KEY) {
            // Send automated email to selected receipients.
            const receipients = [""]

            syncClient().then(_ => {
                // TODO: Use gmail-send to send automated emails and use nodejs-cron/GitHub Actions to schedule task.
                res.status(200).json({ success: 'true' })
            }).catch(_ => {
                res.status(500).json({
                    success: ' false'
                })
            })
        } else if (APP_PASSWORD == PASSWORD) {
            // For future implementations, check for web tokens instead.
            syncClient().then(_ => {
                Donations.findAll({ raw: true, nest: true }).then(donations => {
                    const { parse } = require('json2csv');
                    const fields = ["id", "name", "email", "classYear", "description", "referral", "payment_method", "campaign", "payment_email", "amount", "transaction_id", "createdAt", "updatedAt"]
                    var data = parse(donations, { fields });
                    res.setHeader('Content-Disposition', 'attachment; filename=' + "db-export [" + Date.now() + "].csv");
                    res.setHeader('Content-Transfer-Encoding', 'binary');
                    res.setHeader('Content-Type', 'application/octet-stream');
                    res.status(200).send(data)
                })
            }).catch(_ => {
                res.status(500).json({
                    success: ' false'
                })
            })
        }
        else {
            res.status(401).json({ success: 'false' })
        }
    } catch (err) {
        res.status(500).json({ success: 'false' })
    }
}

export default export_db;