const express = require('express')
const monthmodule = require('../models/month')
const monthmodel = require('../models/month')
const month = express.Router()
month.use(express.static('./public'))

month.get('/monthly', function (req,res) {
    res.render('monthsearch')
})


month.get('/viewmonth', async function (req,res) {
    const month=req.body.month;

   try {
    const data =await monthmodel.findOne({month:month})
    res.render('monthlyreport',{data})
   } catch (error) {
    
   }

})

month.post('/addmonth',async function(req,res){

    const income= await incomemodel.findOne({_id:id})
})

module.exports = month