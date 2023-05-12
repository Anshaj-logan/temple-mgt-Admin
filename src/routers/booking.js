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
    
    const data = {
        user_id:req.params.user_id,
        pooja_id:req.params.pooja_id,
        name:req.body.name,
        bdate:req.body.date,
        nakshathra:req.body.nakshathra,
        
        
    }
    console.log(data);
    booking(data).save().then((data)=>{
        res.status(200).json({
            success:true,
                   error:false,
                   data:details,    
                   message:"successful"
        })

    }).catch((err)=>{
        res.status(400).json({
            success:false,
                   error:true,
                   data:err,    
                   message:"error"
        })
    })

})

module.exports = booking