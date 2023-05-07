const mongoose = require('mongoose')

const schema = mongoose.Schema

const poojaschema = new schema({
        pname:{type:String},
        category:{type:String},
        amound:{type:String},
        pdate:{type:String},
})

const poojamodel = mongoose.model('pooja_tb',poojaschema)

module.exports= poojamodel