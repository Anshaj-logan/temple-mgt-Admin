const mongoose = require('mongoose')

const schema = mongoose.Schema

const addpicschema = new schema({
    photo:{type:String},
    picdate:{type:String}

})

const addpicmodel= mongoose.model('photo_tb',addpicschema)

module.exports = addpicmodel