const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://krishnendhuk165836:krishnendhuk165836@cluster0.8jscmnw.mongodb.net/temple?retryWrites=true&w=majority')


const schema= mongoose.Schema

const expenseshema=new schema({
       indate:{type:String},
       particular:{type:String},
       count:{type:String},
       amount:{type:String},

})

const expensemodel= mongoose.model('expense_tb',expenseshema)

module.exports=expensemodel