const express = require('express')
const addpicmodel = require('../models/pic_add')
const { name } = require('ejs')
const photo = express.Router()
photo.use(express.static('./public'))
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })



photo.get('/picadd', function (req,res) {
    res.render('form-notifications')
})

photo.get('/delete/:name', async function(req,res){
    const id=req.params.name
    try {
        const delete_data=await addpicmodel.deleteOne({_id:id}) 
        if(delete_data.deletedCount==1){
            res.redirect('/pic/picview')
        }

    } catch (error) {
        
    }
})



photo.get('/picview', async function (req,res) {

    try {
        const data =await addpicmodel.find()
        console.log("datas",data);
        
        res.render('widgets',{data})
       } catch (error) {
        
       }
})

photo.post('/savepic',upload.single('pic'), function (req,res) {
    console.log(req.body);
    let a = new Date();
    const data={
       photo:req.file.filename,
       picdate:a
    }


addpicmodel(data).save().then((data)=>{
    console.log(data);
    res.redirect('/pic/picview')
})
})

module.exports = photo