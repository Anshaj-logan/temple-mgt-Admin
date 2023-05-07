const mongoose=require('mongoose')



const schema= mongoose.Schema

const expenseshema=new schema({
       indate:{type:String},
       particular:{type:String},
       count:{type:String},
       amount:{type:String},

})

const expensemodel= mongoose.model('expense_tb',expenseshema)

module.exports=expensemodel