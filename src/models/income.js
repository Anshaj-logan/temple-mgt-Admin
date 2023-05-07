const mongoose=require('mongoose')



const schema= mongoose.Schema

const incomeschema=new schema({
       indate:{type:String},
       particular:{type:String},
       count:{type:String},
       amount:{type:String},

})

const incomemodel= mongoose.model('income_tb',incomeschema)

module.exports=incomemodel