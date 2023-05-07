const express = require('express')
const registermodel = require('../models/register')
const donationmodel = require('../models/donation')
const viewdon = express.Router()
viewdon.use(express.static('./public'))

viewdon.get('/viewdonation',function(req,res){
    res.render('page-invoice')
})


viewdon.get('/checkdate', async function (req,res) {
    const start=req.body.start;
    const end=req.body.end;
    try {
        const data=await donationmodel.find({
       dondate:{
            $gte:start,
            $lt:end
        }
        })
        res.render('donation',{data})

    } catch (error) {
        
    }
    
})

viewdon.post('/donadd', async function(req,res){
    let a=new Date()
     //const id=
    const userdata= await registermodel.findOne({_id:id})
    const data={
        username:userdata.username,
        hname:userdata.hname,
        place:userdata.place,
        phone:userdata.phone,
        amount:req.body.amount,
        dondate:a
    }

    donationmodel(data).save().then((details)=>{
        res.status(200).json({
            success:true,
                   error:false,
                   data:details,    
                   message:"successful"
        })

    })
})


module.exports = viewdon