const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://krishnendhuk165836:krishnendhuk165836@cluster0.8jscmnw.mongodb.net/temple?retryWrites=true&w=majority')

const schema = mongoose.Schema

const addnotischema = new schema({
    notdate:{type:String},
    notification:{type:String},

})

const addnotimodel= mongoose.model('notification_tb',addnotischema)

module.exports = addnotimodel