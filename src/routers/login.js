const express= require('express')
const loginmodel = require('../models/login')
const login = express.Router()
login.use(express.static('./public'))



login.get('/log', function(req,res){
    res.render('loginpage')
})

login.post('/login', function(req,res){
    const data={
        username:req.body.name,
        password:req.body.password
    }
    loginmodel(data).save().then((details)=>{
        res.status(200).json({
            success:true,
            error:false,
            data:details,    
            message:"Login successful"

    })
})
})

login.get('/loginview',async function(req,res){
    try {

        const data=await loginmodel.find()
        res.render('login',{data})
        
    } catch (error) {
        
    }
})

module.exports= login