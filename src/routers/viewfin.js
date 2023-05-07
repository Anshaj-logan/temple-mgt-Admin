const express = require('express')
const viewfin = express.Router()
viewfin.use(express.static('./public'))



viewfin.get('/finance', function (req,res) {
    res.render('docs')
})





module.exports = viewfin