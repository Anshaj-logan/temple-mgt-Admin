const mongoose = require('mongoose')

const schema = mongoose.Schema

const csaddschema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    csname:{type:String},
    email:{type:String},
    hname:{type:String},
    place:{type:String},
    pin:{type:String},
    gender:{type:String},
    phone:{type:String},
    commitee:{type:String},
    jdate:{type:String},
    


})

const addcsmodel =mongoose.model('staff_tb',csaddschema)

module.exports = addcsmodel