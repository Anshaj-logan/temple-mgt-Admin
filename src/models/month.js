const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://krishnendhuk165836:krishnendhuk165836@cluster0.8jscmnw.mongodb.net/temple?retryWrites=true&w=majority')


const schema= mongoose.Schema

const monthschema=new schema({
       month:{type:String},
       particular:{type:String},
       amount:{type:String},
       profit:{type:String},

})

const monthmodel= mongoose.model('month_tb',monthschema)

module.exports=monthmodel