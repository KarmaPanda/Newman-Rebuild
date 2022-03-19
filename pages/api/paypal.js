const paypal = (req, res) => {
    res.status(200).json({
        client_id: process.env.paypal_clientid
    })
}

export default paypal;