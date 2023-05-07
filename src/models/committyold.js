const mongoose=require('mongoose')


const schema= mongoose.Schema

const commiteeold=new schema({
    comity_id:{type:mongoose.Types.ObjectId,ref:"staff_tb"},
    oldcsname:{type:String},
    oldemail:{type:String},
    oldhname:{type:String},
    oldplace:{type:String},
    // pin:{type:String},
    oldgender:{type:String},
    oldphone:{type:String},
    oldcommitee:{type:String},
    // jdate:{type:String},
    oldpassword:{type:String},

})
const comitymodel =mongoose.model('comityold',commiteeold)

module.exports = comitymodel