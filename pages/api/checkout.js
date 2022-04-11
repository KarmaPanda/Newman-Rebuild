// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const checkoutNodeJssdk = require('@paypal/checkout-server-sdk');
const payPalClient = require('../../scripts/PayPal');
const Donations = require("../../db/models/Donations");

import { syncClient } from '../../db/dbFunctions';

const sendEmail = require('gmail-send')({
    user: process.env.gmail_user,
    pass: process.env.gmail_pass
})

const checkout = (req, res) => {
    syncClient().then(async _ => {
        if (req.method !== 'POST') {
            res.status(405).send({ message: 'Only POST requests allowed' })
        }
        else {
            if (req.body.payment_method == "Venmo") {
                Donations.create({
                    id: null,
                    name: req.body.name,
                    email: req.body.email,
                    classYear: req.body.classYear,
                    description: req.body.description,
                    referral: req.body.referral,
                    payment_method: req.body.payment_method,
                    campaign: req.body.campaign,
                    payment_email: null,
                    amount: req.body.amount,
                    transaction_id: null
                }).then(async r => {
                    console.log("[api/checkout]: New donation by", r.name)
                    setTimeout(function () {
                        sendEmail({
                            to: req.body.email,
                            subject: 'Thank you for your donation to the ' + req.body.campaign,
                            text: 'Dear ' + req.body.name + ',\n\nThis email serves as a confirmation that we have recorded your donation of $' + req.body.amount + ' towards the ' + req.body.campaign + ' at the University of Rochester.\nWe sincerely appreciate your generosity and support!\n\nSincerely,\nMike Taylor and Michael Chavrimootoo'
                        }, (error, result, fullResult) => {
                            if (error) console.error(error);
                            console.log(result);
                        })
                    }, 60000 * 2)
                    res.status(201).json({
                        message: "Success!"
                    })
                }).catch(error => {
                    console.error("[api/checkout]: ", error)
                    res.status(500)
                })
            } else {
                let details = req.body.details

                let request = new checkoutNodeJssdk.orders.OrdersGetRequest(details.id);
                request.headers["prefer"] = "return=representation";
                //https://www.paypal.com/us/webapps/mpp/partner-program
                //request.headers["PayPal-Partner-Attribution-Id"] = "PARTNER_ID_ASSIGNED_BY_YOUR_PARTNER_MANAGER";

                let order;

                try {
                    order = await payPalClient.client().execute(request);
                } catch (err) {
                    console.error("[api/checkout]: " + err);
                    return res.status(500);
                }

                if (order.result.purchase_units[0].amount.value !== details.purchase_units[0].amount.value) {
                    console.error("[api/checkout]: Invalid Payment Amount");
                    return res.status(400);
                }

                // Set result to one fetched by backend to prevent data tampering.
                details = order.result

                Donations.create({
                    id: null,
                    name: req.body.name,
                    email: req.body.email,
                    classYear: req.body.classYear,
                    description: req.body.description,
                    referral: req.body.referral,
                    payment_method: req.body.payment_method,
                    campaign: req.body.campaign,
                    payment_email: details.payer.email_address,
                    amount: details.purchase_units[0].amount.value,
                    transaction_id: details.id
                }).then(async r => {
                    console.log("[api/checkout]: New donation by", r.name)
                    sendEmail({
                        to: req.body.email,
                        subject: 'Thank you for your donation to the ' + req.body.campaign,
                        text: 'Dear ' + req.body.name + ',\n\nThis email serves as a confirmation that we have recorded your donation of $' + details.purchase_units[0].amount.value + ' towards the ' + req.body.campaign + ' at the University of Rochester.\nWe sincerely appreciate your generosity and support!\n\nSincerely,\nMike Taylor and Michael Chavrimootoo'
                    }, (error, result, fullResult) => {
                        if (error) console.error(error);
                        console.log(result);
                    })
                    res.status(201).json({
                        message: "Success!"
                    })
                }).catch(error => {
                    console.error("[api/checkout]: ", error)
                    res.status(500)
                })
            }
        }
    }).catch(err => {
        res.status(500).json({
            message: err
        })
    })
}

export default checkout;