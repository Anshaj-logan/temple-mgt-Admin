const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://krishnendhuk165836:krishnendhuk165836@cluster0.8jscmnw.mongodb.net/temple?retryWrites=true&w=majority')
 
const schema = mongoose.Schema

const addacSchema = new schema({
        acname:{type:String},
        email:{type:String},
        hname:{type:String},
        place:{type:String},
        pin:{type:String},
        gender:{type:String},
        phone:{type:String},
        staftype:{type:String},
        jdate:{type:String},
        password:{type:String},
})

const addacmodel = mongoose.model('accountant_tb',addacSchema)

module.exports= addacmodel