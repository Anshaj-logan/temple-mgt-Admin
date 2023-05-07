const express = require('express')
const daybkmodel = require('../models/daybook')
const incomemodel = require('../models/income')
const daybook = express.Router()
daybook.use(express.static('./public'))

daybook.get('/daybook', function (req,res) {
    res.render('datesearch')
})


daybook.get('/viewdaybook', async function (req,res) {
    const start=req.body.start;
    const end=req.body.end;

   try {
    const data =await daybkmodel.find({
        daybook:{
            $gte:start,
            $lt:end
        }
    })
    res.render('daybookreport',{data})
   } catch (error) {
    
   }

})

daybook.post('/addbook',async function(req,res){

    const income= await incomemodel.findOne({_id:id})
})

module.exports = daybook