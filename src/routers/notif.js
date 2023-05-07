const express = require('express')
const addnotimodel = require('../models/noti_add')
const notif = express.Router()
notif.use(express.static('./public'))



notif.get('/notiadd', function (req,res) {
    res.render('table-basic')
})
// notif.get('/delete/:name',async function (req,res) {
// const id =req.params.name
// try {
//     const delete_data = await addnotimodel.deleteOne({_id:id})
//     if(delete_data.deletedCount==1){
//         res.redirect('/notific/notiv')
//     }
// } catch (error) {
    
// }

// })

notif.get('/notiv', async function (req,res) {


    try {
        const data =await addnotimodel.find()
        console.log("datas",data);
        res.render('table-data-table',{data})

       } catch (error) {
        
       }
    
    })

    notif.get('/notivwuser', async function (req,res) {


        try {
            const data =await addnotimodel.find()
            console.log("datas",data);
            res.json({data})
    
           } catch (error) {
            
           }
        
        })


notif.post('/savenoti', function (req,res) {
    console.log(req.body);
    let a = new Date();
    const data={
        notdate:a,
        notification:req.body.noti
        
    }
    addnotimodel(data).save().then((data)=>{
        res.redirect('/notific/notiv')
        console.log(data);
})


})

module.exports = notif