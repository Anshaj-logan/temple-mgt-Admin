const express = require('express')
const bookmodel = require('../models/bookpooja')

const booking = express.Router()
booking.use(express.static('./public'))

booking.get('/booking', function (req,res) {
    res.render('gghh')
})


booking.get('/viewschedule', async function (req,res) {

   try {
    const data =await bookmodel.find()
    console.log("datas",data);
    res.render('poojaview',{data})
   } catch (error) {
    
   }

})

booking.post('/bookpooja',function (req,res) {
    // console.log(req.body);
    const data = {
        name:req.body.name,
        pname:req.body.namep,
        amount:req.body.cash,
        bdate:req.body.dateb,
        nakshathra:req.body.nakshathra,
        
        
    }
    booking(data).save().then((data)=>{
        res.status(200).json({
            success:true,
                   error:false,
                   data:details,    
                   message:"successful"
        })

    })

})

module.exports = booking