const mongoose = require('mongoose')

 
const schema = mongoose.Schema

const bookschema = new schema({
        name:{type:String},
        nakshathra:{type:String},
        pname:{type:String},
        amound:{type:String},
        bdate:{type:String},
        mode:{type:String},
})

const bookmodel = mongoose.model('book_tb',bookschema)

module.exports= bookmodel