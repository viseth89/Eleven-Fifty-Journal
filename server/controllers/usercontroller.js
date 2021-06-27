const router = require('express').Router();
const { UserModel } = require('../models');

router.post("/register",  (req, res) => {

    let {email, password } = req.body.user;
    UserModel.create({
        email,
        password
    })
})

module.exports =router;