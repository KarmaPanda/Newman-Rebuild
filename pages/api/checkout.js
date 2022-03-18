// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const checkoutNodeJssdk = require('@paypal/checkout-server-sdk');
const payPalClient = require('../../scripts/PayPal');
const Donations = require("./models/Donations");

export default (req, res) => {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
    }
    else {
        let details = req.body.details

        let request = new checkoutNodeJssdk.orders.OrdersGetRequest(details.id);
        request.headers["prefer"] = "return=representation";
        //https://www.paypal.com/us/webapps/mpp/partner-program
        //request.headers["PayPal-Partner-Attribution-Id"] = "PARTNER_ID_ASSIGNED_BY_YOUR_PARTNER_MANAGER";

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
                res.sendStatus(201)
            }).catch(error => {
                console.error("[api/checkout]: ", error)
                res.sendStatus(500)
            })
        } else {
            let order;

            try {
                order = await payPalClient.client().execute(request);
            } catch (err) {
                console.error("[api/checkout]: " + err);
                return res.sendStatus(500);
            }

            if (order.result.purchase_units[0].amount.value !== details.purchase_units[0].amount.value) {
                console.error("[api/checkout]: Invalid Payment Amount");
                return res.sendStatus(400);
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
                res.sendStatus(201)
            }).catch(error => {
                console.error("[api/checkout]: ", error)
                res.sendStatus(500)
            })
        }
    }
}