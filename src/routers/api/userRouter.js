const express = require('express')
const donation = require('../../models/donation')

const userRouter = express.Router()



userRouter.post('/add-donation', async (req, res) => {

    try {
        const { login_id, name, house_name, place,amount,date } = req.body
        console.log(req.body);

        const result = await donation.create({ login_id, name, house_name, place,amount,date  })
        if (result) {
            res.status(201).json({ success: true, error: false, message: "Donation Added", details: result });
        }


    } catch (error) {
        res.status(500).json({ success: false, error: true, message: "Something went wrong" });
        console.log(error);
    }

})
module.exports = userRouter