const router = require('express').Router();
const { UserModel } = require('../models');

router.post("/register",  (req, res) => {

    UserModel.create({
        email: "user@email.com",
        password: "password"
    })
})

module.exports =router;