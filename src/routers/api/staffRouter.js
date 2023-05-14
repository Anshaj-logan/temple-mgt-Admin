const express = require('express')
const staffdonation = require('../../models/staffdonation')


const staffRouter = express.Router()

userRouter.post('/add-donation', async (req, res) => {

    try {
        const { login_id, name, house_name, place,amount,date } = req.body
        console.log(req.body);

        const result = await staffdonation.create({ login_id, name, house_name, place,amount,date  })
        if (result) {
            res.status(201).json({ success: true, error: false, message: "Donation Added", details: result });
        }


    } catch (error) {
        res.status(500).json({ success: false, error: true, message: "Something went wrong" });
        console.log(error);
    }

})
module.exports = staffRouter