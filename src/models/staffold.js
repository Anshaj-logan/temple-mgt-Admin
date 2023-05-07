const mongoose = require('mongoose')


const schema = mongoose.Schema

const staffold = new schema({
    staff_id:{type:mongoose.Types.ObjectId,ref:"accountant_tb"},
    oldacname:{type:String},
    oldemail:{type:String},
    oldhname:{type:String},
    oldplace:{type:String},
    oldpin:{type:String},
    oldgender:{type:String},
    oldphone:{type:String},
    oldcommitee:{type:String},
    oldpassword:{type:String},


})

const staffoldmodel =mongoose.model('staffold_tb',staffold)

module.exports = staffoldmodel