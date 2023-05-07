const express = require('express')
const addcsmodel = require('../models/cs_add')
const comitymodel = require('../models/committyold')
const staff = express.Router()
staff.use(express.static('./public'))



staff.get('/staff', function (req,res) {
    res.render('form-components')
})

staff.get('/stafview', async function (req,res) {


    try {
        const data =await addcsmodel.find()
        console.log("datas",data);
        res.render('page-mailbox',{data})
       } catch (error) {
        
       }
})

staff.get('/oldstaff', async function (req,res) {


    try {
        const data =await comitymodel.find()
        res.render('committeeold',{data})
       } catch (error) {
        
       }
})

staff.get('/:id',async function(req,res){
    const id=req.params.id
    try {
        const edit_data=await addcsmodel.findOne({_id:id})
        
            res.render('committeeupdate',{edit_data})
        
        
    } catch (error) {
        
    }
} )

staff.post('/savestaff', function (req,res) {
    // console.log(req.body);
    let a = new Date();
    const data = {
        csname:req.body.name,
        email:req.body.email,
        hname:req.body.hname,
        place:req.body.place,
        pin:req.body.pin,
        gender:req.body.gender,
        phone:req.body.phone,
        commitee:req.body.cm,
        jdate:a,
        password:req.body.pass

    }
    addcsmodel(data).save().then((data)=>{
        res.redirect('/staff/stafview')
        console.log(data);
    })

})


staff.post('/updatecomty',async function (req,res) {
    const id=req.body._id

    const data = {
        csname:req.body.name,
        email:req.body.email,
        hname:req.body.hname,
        place:req.body.place,
        pin:req.body.pin,
        gender:req.body.gender,
        phone:req.body.phone,
        commitee:req.body.cm,
        password:req.body.pass


    }   
    try {
        const old_data=await addcsmodel.findOne({_id:id})
        
       const dataOld={
           // oldstaff_id:old_data._id,
           oldcsname:old_data.csname,
           oldemail:old_data.email,
           oldhname:old_data.hname,
           oldplace:old_data.place,
           oldgender:old_data.gender,
           oldphone:old_data.phone,
           oldcommitee:old_data.commitee,
           oldpassword:old_data.password
    
       }
       comitymodel(dataOld).save().then((data)=>{
           console.log(id);    
           
               
    
       })
    
    
    } catch (error) {
       
    }
    addcsmodel.updateOne({_id:id},{$set:data}).then((data)=>{
        res.redirect('/staff/stafview')
       })
    
       
    
    
})

   
        
       

    
    


module.exports = staff