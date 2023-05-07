const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://krishnendhuk165836:krishnendhuk165836@cluster0.8jscmnw.mongodb.net/temple?retryWrites=true&w=majority')

const schema = mongoose.Schema

const addpicschema = new schema({
    photo:{type:String},
    picdate:{type:String}

})

const addpicmodel= mongoose.model('photo_tb',addpicschema)

module.exports = addpicmodel