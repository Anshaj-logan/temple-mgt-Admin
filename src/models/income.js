const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://krishnendhuk165836:krishnendhuk165836@cluster0.8jscmnw.mongodb.net/temple?retryWrites=true&w=majority')


const schema= mongoose.Schema

const incomeschema=new schema({
       indate:{type:String},
       particular:{type:String},
       count:{type:String},
       amount:{type:String},

})

const incomemodel= mongoose.model('income_tb',incomeschema)

module.exports=incomemodel