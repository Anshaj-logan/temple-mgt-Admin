const express = require('express')
const registermodel = require('../models/register')
const login = require('../models/login')
const reg_rout = express.Router()
reg_rout.use(express.static('./public'))




reg_rout.get('/reg', function (req,res) {
    res.render('reg')
})

reg_rout.post('/regadd', function(req,res){
    let a = new Date();
    const data={
        username:req.body.name,
        email:req.body.email,
        hname:req.body.hname,
        place:req.body.place,
        phone:req.body.phone,
        rdate:a,
        password:req.body.password,
        Status:"0"
    }
        registermodel(data).save().then((details)=>{
            res.status(200).json({
                   success:true,
                   error:false,
                   data:details,    
                   message:"Registeration successful"
            })

         
        })

        
})
reg_rout.get('/regview',async function(req,res){
    try {
        const data = await  login.aggregate([
            {
                '$lookup': {
                  'from': 'register_tbs', 
                  'localField': '_id', 
                  'foreignField': 'login_id', 
                  'as': 'data'
                }
              },
            {
              "$unwind": "$data"
            },
            {
              "$group": {
                "_id": "$_id",
                "user_id": { "$first": "$data._id" },
                "name": { "$first": "$data.name" },
                "email": { "$first": "$data.email" },
                "house_name": { "$first": "$data.house_name" },
                "phone": { "$first": "$data.phone_no" },
                "place": { "$first": "$data.place" },
                "status": { "$first": "$status" },
              }
            }
      
          ])
    // res.json({data})
        res.render('Viewuser',{data})
        
    } catch (error) {
        
    }
})

reg_rout.get('/approve/:id',function(req,res){
    const id=req.params.id
const approved={
    status:"1"
   }
       

   login.updateOne({_id:id},{$set:approved}).then((data)=>{
    res.redirect('/register/regview')

   })
   
})
reg_rout.get('/reject/:id',function(req,res){
    const id=req.params.id
const rejected={
    status:"2"
   }
       

   registermodel.updateOne({_id:id},{$set:rejected}).then((data)=>{
    res.redirect('/register/regview')

   })
   
})

    



module.exports = reg_rout