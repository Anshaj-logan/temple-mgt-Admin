const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://krishnendhuk165836:krishnendhuk165836@cluster0.8jscmnw.mongodb.net/temple?retryWrites=true&w=majority')


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