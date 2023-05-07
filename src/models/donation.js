const mongoose=require('mongoose')



const schema = mongoose.Schema

const donationschema =new schema({

    username:{type:String},
    email:{type:String},
    hname:{type:String},
    place:{type:String},
    phone:{type:String},
    amount:{type:String},
    dondate:{type:String},
})

const  donationmodel= mongoose.model('donation_tb',donationschema)

module.exports=donationmodel