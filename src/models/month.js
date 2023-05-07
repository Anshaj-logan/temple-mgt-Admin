const mongoose=require('mongoose')



const schema= mongoose.Schema

const monthschema=new schema({
       month:{type:String},
       particular:{type:String},
       amount:{type:String},
       profit:{type:String},

})

const monthmodel= mongoose.model('month_tb',monthschema)

module.exports=monthmodel