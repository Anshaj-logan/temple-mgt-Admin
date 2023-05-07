const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://krishnendhuk165836:krishnendhuk165836@cluster0.8jscmnw.mongodb.net/temple?retryWrites=true&w=majority')
 
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