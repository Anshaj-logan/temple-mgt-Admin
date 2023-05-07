const express = require('express')
const poojamodel = require('../models/pooja')
const pooja = express.Router()
pooja.use(express.static('./public'))

pooja.get('/poojaadd', function (req,res) {
    res.render('gghh')
})


pooja.get('/poojaview', async function (req,res) {

   try {
    const data =await poojamodel.find()
    console.log("datas",data);
    res.render('poojaview',{data})
   } catch (error) {
    
   }

})
pooja.post('/addpooja',function (req,res) {
    // console.log(req.body);
    let a = new Date();
    const data = {
        pname:req.body.namep,
        category:req.body.cat,
        amount:req.body.cash,
        pdate:a,
        
        
    }
    
    poojamodel(data).save().then((data)=>{
        res.redirect('gjg')
        console.log(data);
    })

})

pooja.post('/update_amount',async function (req,res) {
    // console.log(req.body);

    const id=req.body._id
    const data = {
        amount:req.body.cash,
        pdate:a,
        
    }

   

    
    poojamodel.updateOne({_id:id},{$set:data}).then((data)=>{
        res.status(200).json({
            success:true,
                   error:false,
                   data:details,    
                   message:"successful"
        })

    })

})
pooja.get('/:id',async function(req,res){
    const id=req.params.id
    try {
        const poojadetails= await poojamodel.findOne({_id:id})
        
            res.render('bookpooja',{poojadetails})
        
        
    } catch (error) {
        
    }
})


module.exports = pooja