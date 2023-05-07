const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://krishnendhuk165836:krishnendhuk165836@cluster0.8jscmnw.mongodb.net/temple?retryWrites=true&w=majority')
 
const schema = mongoose.Schema

const registerSchema = new schema({
        username:{type:String},
        email:{type:String},
        hname:{type:String},
        place:{type:String},
        phone:{type:String},
        password:{type:String},
        rdate:{type:String},
        Status:{type:String},
})

const registermodel = mongoose.model('register_tb',registerSchema)

module.exports =registermodel