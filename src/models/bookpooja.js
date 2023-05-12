const mongoose = require('mongoose')

 
const schema = mongoose.Schema

const bookschema = new schema({
        user_id:{type:mongoose.Types.ObjectId,ref:"register_tb"},
        pooja_id:{type:mongoose.Types.ObjectId,ref:"pooja_tb"},
        name:{type:String},
        nakshathra:{type:String},
        bdate:{type:String},
        mode:{type:String},
})

const bookmodel = mongoose.model('book_tb',bookschema)

module.exports= bookmodel