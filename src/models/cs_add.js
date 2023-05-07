const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://krishnendhuk165836:krishnendhuk165836@cluster0.8jscmnw.mongodb.net/temple?retryWrites=true&w=majority')

const schema = mongoose.Schema

const csaddschema = new schema({
    csname:{type:String},
    email:{type:String},
    hname:{type:String},
    place:{type:String},
    pin:{type:String},
    gender:{type:String},
    phone:{type:String},
    commitee:{type:String},
    jdate:{type:String},
    password:{type:String},


})

const addcsmodel =mongoose.model('staff_tb',csaddschema)

module.exports = addcsmodel