const express = require('express')
const expensemodel = require('../models/expense')
const viewexp = express.Router()
viewexp.use(express.static('./public'))


viewexp.get('/datexpn',function(req,res){
    res.render('form-custom')

})




viewexp.get('/viewexpense', async function (req,res) {
    const start=req.body.start;
    const end=req.body.end;
    // try {
    //    const data=await expensemodel.find({
    //     dondate:{
    //         $gte:start,
    //         $lt:end
    //     }
    //    })
    try{ const data=await incomemodel.find()
        res.render('expense',{data})
        
    } catch (error) {
        
    }
    
})

viewexp.post('/addexpsene',async function(req,res){
    const data={
        indate:req.body.indate,
        particular:req.body.particular,
        count:req.body.count,
        amount:req.body.amount
    }
    expensemodel(data).save().then((details)=>{
        res.status(200).json({
            success:true,
                   error:false,
                   data:details,    
                   message:"successful"
        })
    })
})


module.exports = viewexp