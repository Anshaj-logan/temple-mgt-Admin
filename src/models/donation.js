const mongoose=require('mongoose')



const schema = mongoose.Schema

const donationschema =new schema({

    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    name:{type:String},
    house_name:{type:String},
    place:{type:String},
    amount:{type:String},
    date:{type:String},
})

const  donationmodel= mongoose.model('donation_tb',donationschema)

module.exports=donationmodel