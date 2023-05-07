const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://krishnendhuk165836:krishnendhuk165836@cluster0.8jscmnw.mongodb.net/temple?retryWrites=true&w=majority')


const schema= mongoose.Schema

const daybookschema=new schema({
       indate:{type:String},
       particular:{type:String},
       amount:{type:String},
       profit:{type:String},

})

const daybkmodel= mongoose.model('daybook_tb',daybookschema)

module.exports=daybkmodel