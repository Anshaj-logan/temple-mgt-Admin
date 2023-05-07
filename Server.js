const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const viewfin = require('./src/routers/viewfin')
const viewdon = require('./src/routers/viewdon')
const viewexp = require('./src/routers/viewexp')
const notif = require('./src/routers/notif')
const accountant = require('./src/routers/accountant')
const photo = require('./src/routers/photo')
const staff = require('./src/routers/staff')
const viewincome=require('./src/routers/viewincom')
const reg_rout= require('./src/routers/reg_rout')
const booking = require('./src/routers/booking')
const pooja = require('./src/routers/poojarout')
app.use(express.static('./public'))
app.set('view engine','ejs')
app.set('views','./src/views')
app.use(bodyParser.urlencoded({ extended: false }))



app.get('/',  (req, res)=> {
    res.render('dashboard')
  })

  app.use('/account',accountant)

  app.use('/staff',staff)

  app.use('/notific',notif)
  app.use('/pooja',pooja)
  
  app.use('/finance',viewfin)

app.use('/booking',booking)
  app.use('/donation',viewdon)

  app.use('/expense',viewexp)
  
  app.use('/pic',photo)
  app.use('/register',reg_rout)
  app.use('/income',viewincome)

  

app.listen(2000,()=>{
    console.log("server start at http://localhost:2000");
})