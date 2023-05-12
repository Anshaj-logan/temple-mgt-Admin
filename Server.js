const express = require('express')
const mongoose = require('mongoose')
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
const RegisterRouter = require('./src/routers/api/RegisterRouter')
const signinRouter = require('./src/routers/api/signinRouter')
const userRouter = require('./src/routers/api/userRouter')
const poojaRouter = require('./src/routers/api/poojaRouter')
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

  app.use(express.static('./public'))
app.set('view engine','ejs')
app.set('views','./src/views')
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader( 
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });



app.use('/api/register/',RegisterRouter)
app.use('/api/login/',signinRouter)
app.use('/api/user/',userRouter)
app.use('/api/pooja/',poojaRouter)
  


  const MONGODB_URL="mongodb+srv://maneeshmaitexa:maneeshmaitexa@cluster0.fv75o1k.mongodb.net/TempleDB?retryWrites=true&w=majority"
  const port=2000;
  
  mongoose.connect(MONGODB_URL).then(()=>{
      app.listen(port,()=>{
          console.log(`server running on port http://localhost:2000/`);
      })
  }).catch((error)=>{
      console.log(` ${error} did not connect`); 
  })