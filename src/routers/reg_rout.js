const express = require('express')
const registermodel = require('../models/register')
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

        const data=await registermodel.find()
        res.render('Viewuser',{data})
        
    } catch (error) {
        
    }
})

reg_rout.get('/approve/:id',function(req,res){
    const id=req.params.id
const approved={
    Status:"1"
   }
       

   registermodel.updateOne({_id:id},{$set:approved}).then((data)=>{
    res.redirect('/register/regview')

   })
   
})
reg_rout.get('/reject/:id',function(req,res){
    const id=req.params.id
const rejected={
    Status:"2"
   }
       

   registermodel.updateOne({_id:id},{$set:rejected}).then((data)=>{
    res.redirect('/register/regview')

   })
   
})

    



module.exports = reg_rout