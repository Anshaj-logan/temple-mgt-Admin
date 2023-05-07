const mongoose=require('mongoose')



const schema= mongoose.Schema

const daybookschema=new schema({
       indate:{type:String},
       particular:{type:String},
       amount:{type:String},
       profit:{type:String},

})

const daybkmodel= mongoose.model('daybook_tb',daybookschema)

module.exports=daybkmodel