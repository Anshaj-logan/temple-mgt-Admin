const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://krishnendhuk165836:krishnendhuk165836@cluster0.8jscmnw.mongodb.net/temple?retryWrites=true&w=majority')
 
const schema = mongoose.Schema

const poojaschema = new schema({
        pname:{type:String},
        category:{type:String},
        amound:{type:String},
        pdate:{type:String},
})

const poojamodel = mongoose.model('pooja_tb',poojaschema)

module.exports= poojamodel