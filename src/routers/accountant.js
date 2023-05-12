const express = require('express')
const addacmodel = require('../models/ac_add')
const staffoldmodel = require('../models/staffold')
const login = require('../models/login')
const accountant = express.Router()
const bcrypt = require('bcryptjs')
accountant.use(express.static('./public'))

accountant.get('/account', function (req, res) {
    res.render('bootstrap-components')
})


accountant.get('/accountview', async function (req, res) {

    try {
        const data = await addacmodel.find()
        console.log("datas", data);
        res.render('ui-cards', { data })
    } catch (error) {

    }

})

accountant.get('/:id', async function (req, res) {
    const id = req.params.id
    try {
        const edit_data = await addacmodel.findOne({ _id: id })

        res.render('staffupdate', { edit_data })


    } catch (error) {

    }
})

accountant.post('/add_ac', async function (req, res) {
    try {

        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        var log = {
            username: req.body.username,
            password: hashedPassword,
            role: 2,
            status: 1,
        }
        const result = await login(log).save()
        let a = new Date();
        var reg = {
            login_id:result._id,
            acname: req.body.nameac,
            age: req.body.age,
            email: req.body.email,
            hname: req.body.hname,
            place: req.body.place,
            pin: req.body.pin,
            gender: req.body.gender,
            phone: req.body.contact,
            staftype: req.body.sftype,
            jdate: a,


        }
        const result2 = await addacmodel(reg).save()
        res.redirect('/account/accountview')

    }
    catch (err) {
        res.redirect('/account/account')
        console.log(err)
    }

})

accountant.post('/update_staff', async function (req, res) {
    // console.log(req.body);

    const id = req.body._id
    const data = {
        acname: req.body.nameac,
        email: req.body.email,
        hname: req.body.hname,
        place: req.body.place,
        pin: req.body.pin,
        gender: req.body.gender,
        phone: req.body.contact,
        staftype: req.body.sftype,
        // password: req.body.pass
    }

    try {
        const old_data = await addacmodel.findOne({ _id: id })
        const dataold = {
            oldacname: old_data.acname,
            oldemail: old_data.email,
            oldhname: old_data.hname,
            oldplace: old_data.place,
            oldpin: old_data.pin,
            oldgender: old_data.gender,
            oldphone: old_data.phone,
            oldstaftype: old_data.staftype,
            oldpassword: old_data.password,

        }

        staffoldmodel(dataold).save().then((data) => {
            console.log(id);
            addacmodel.updateOne({ _id: id }, { $set: data }).then((data) => {
                res.redirect('/account/accountview')
                console.log(data);
            })
        })

    } catch (error) {

    }

   

})
accountant.get('/oldstaf', async function (req, res) {


    try {
        const data = await staffoldmodel.find()
        res.render('staffold', { data })
        // res.json({"sdfs":"dfg"})
    } catch (error) {

    }
})





module.exports = accountant