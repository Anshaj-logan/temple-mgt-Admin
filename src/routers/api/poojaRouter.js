const express = require('express')
const pooja = require('../../models/pooja')
const booking = require('../../models/bookpooja')
const mongoose = require('mongoose')
const objectId = mongoose.Types.ObjectId

const poojaRouter = express.Router()



poojaRouter.post('/add-pooja', async (req, res) => {

    try {
       
        const { pname, category, amound } = req.body
        console.log(req.body);
        let a = new Date();
        const result = await pooja.create({ pname, category, amound, a })
        if (result) {
            res.status(201).json({ success: true, error: false, message: "Pooja Added", details: result });
        }


    } catch (error) {
        res.status(500).json({ success: false, error: true, message: "Something went wrong" });
        console.log(error);
    }

})


poojaRouter.get('/view-pooja', async function (req,res) {

    try {
     const data =await pooja.find()
     res.status(201).json({ success: true, error: false, details: data });
    } catch (error) {
        res.status(500).json({ success: false, error: true, message: "Something went wrong" });
    }
 
 })

 poojaRouter.get('/view-pooja/:id', async function (req,res) {

    try {
        const id = req.params.id
     const data =await booking.aggregate([
        {
          '$lookup': {
            'from': 'register_tbs', 
            'localField': 'user_id', 
            'foreignField': '_id', 
            'as': 'user'
          }
        }, {
          '$lookup': {
            'from': 'pooja_tbs', 
            'localField': 'pooja_id', 
            'foreignField': '_id', 
            'as': 'pooja'
          }
        },
        {
            "$unwind":"$user"
        },
        {
            "$unwind":"$pooja"
        },
        {
            "$match":{
                "user_id": new objectId(id)
            }
        },
        {
            "$group":{
                "_id":"$_id",
                "name":{"$first":"$name"},
                "nakshathra":{"$first":"$nakshathra"},
                "date":{"$first":"$bdate"},
                "number":{"$first":"$user.phone_no"},
                "userName":{"$first":"$user.name"},
                "poojaName":{"$first":"$pooja.pname"},
                "category":{"$first":"$pooja.category"},
                "amount":{"$first":"$pooja.amound"},
            }
        }
      ])
     res.status(201).json({ success: true, error: false, details: data });
    } catch (error) {
        res.status(500).json({ success: false, error: true, message: "Something went wrong" });
    }
 
 })

 poojaRouter.get('/view-pooja-single/:id', async function (req,res) {

    try {
        const id = req.params.id
     const data =await pooja.findOne({_id:id})
     res.status(201).json({ success: true, error: false, details: data });
    } catch (error) {
        res.status(500).json({ success: false, error: true, message: "Something went wrong" });
    }
 
 })


 poojaRouter.get('/delete/:id', async function(req,res){
    const id=req.params.id
    try {
        const delete_data=await pooja.deleteOne({_id:id}) 
        if(delete_data.deletedCount==1){
            res.status(201).json({ success: true, error: false, message: "Pooja deleted" });
        }

    } catch (error) {
        res.status(500).json({ success: false, error: true, message: "Something went wrong" });
    }
})


poojaRouter.post('/bookpooja', async function (req,res) {
    console.log("hi");
    try {
        const data = {
            user_id:req.body.user_id,
            pooja_id:req.body.pooja_id,
            name:req.body.name,
            bdate:req.body.date,
            nakshathra:req.body.nakshathra,
            
            
        }
        console.log(data);
        booking(data).save().then((data)=>{
            console.log(data);
            res.status(200).json({
                success:true,
                       error:false,
                       data:data,    
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
    } catch (error) {
        res.status(500).json({ success: false, error: true, message: "Something went wrong" });
    }
   

})


module.exports = poojaRouter