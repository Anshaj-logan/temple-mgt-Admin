const mongoose = require('mongoose')

const schema = mongoose.Schema

const addnotischema = new schema({
    notdate:{type:String},
    notification:{type:String},

})

const addnotimodel= mongoose.model('notification_tb',addnotischema)

module.exports = addnotimodel