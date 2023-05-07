const mongoose = require('mongoose')

 
const schema = mongoose.Schema

const registerSchema = new schema({
        name:{type:String},
        email:{type:String},
        house_name:{type:String},
        place:{type:String},
        phone_no:{type:String},
        login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
        pin:{type:String},
        Status:{type:String},
})

const registermodel = mongoose.model('register_tb',registerSchema)

module.exports =registermodel