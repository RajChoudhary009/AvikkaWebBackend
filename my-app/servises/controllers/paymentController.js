const Razorpay = require('razorpay');

const createOrder = async (req, res, next) => {

    try {
        var instance = new Razorpay({
            key_id: 'rzp_live_a19Cf6Z9ZHtmrV',
            key_secret: 'okSAS8C69Nprvye5urklCRld'
            // key_id: 'rzp_test_mkA8Yx2JxXyHw7',
            // key_secret: '6zR17G7MOYEzW0XmP9ySm1ny',
        });
        const { amount, payment_capture, currency } = req.body;

        // Corrected typo in 'recepts' to 'receipt'
        const options = {
            
            amount: amount * 100,
            payment_capture: payment_capture,
            currency: currency,
        };

        const order = await instance.orders.create(options);

        if (!order) {
            // Corrected typo in 'worng' to 'wrong'
            res.status(500).send("something went wrong");
        }

        res.status(200).json({ success: true, data: order });
    } catch (error) {
        console.log(error);
        // Ensure to send an error response in case of an exception
        res.status(500).send("Internal Server Error");
    }
}

const cardDetails = async (req, res) => {
    try {
        var instance = new Razorpay({
            // key_id: 'rzp_live_a19Cf6Z9ZHtmrV',
            // key_secret: 'okSAS8C69Nprvye5urklCRld'
            key_id: 'rzp_live_a19Cf6Z9ZHtmrV',
            key_secret: 'okSAS8C69Nprvye5urklCRld',
        });
        const { rezor_pay_id } = req.body;

        const order = await instance.payments.fetch(rezor_pay_id);

        if (!order) {
            // Corrected typo in 'worng' to 'wrong'
            res.status(500).send("something went wrong");
        }

        res.status(200).json({ success: true, data: order });
    } catch (error) {
        console.log(error);
        // Ensure to send an error response in case of an exception
        res.status(500).send("Internal Server Error");
    }
}


module.exports = { createOrder, cardDetails }