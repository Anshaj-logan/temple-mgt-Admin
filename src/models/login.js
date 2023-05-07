const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://krishnendhuk165836:krishnendhuk165836@cluster0.8jscmnw.mongodb.net/temple?retryWrites=true&w=majority')


const schema= mongoose.Schema

const loginschema=new schema({
       username:{type:String},
       password:{type:String}

})

const loginmodel= mongoose.model('login_tb',loginschema)

module.exports= loginmodel