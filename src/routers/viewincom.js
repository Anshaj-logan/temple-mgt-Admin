const express = require('express')
const incomemodel = require('../models/income')
const viewincome = express.Router()
viewincome.use(express.static('./public'))

viewincome.get('/incomes', function(req,res){
    res.render('incomedate')
})

viewincome.post('/incomeview',function(req,res){
    const data={
        indate:req.body.indate,
        particular:req.body.particular,
        count:req.body.count,
        amount:req.body.amount
    }

    incomemodel(data).save().then((details)=>{
        res.status(200).json({
            success:true,
                   error:false,
                   data:details,    
                   message:"successful"
        })

    })
})   

viewincome.post('/viewincome',async function(req,res){
    const start=req.body.start;
    const end=req.body.end;
    try {
        const data=await incomemodel.find({
            dondate:{
                $gte:ISODate("2023-04-24"),
                $lt:ISODate("2023-04-30")
            }
        })
    // try{ const data=await incomemodel.find()
        res.render('viewincome',{data})
        console.log(data);


    } catch (error) {
        
    }
})


module.exports= viewincome