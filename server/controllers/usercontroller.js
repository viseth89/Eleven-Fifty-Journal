const router = require('express').Router();
const { UserModel } = require('../models');

router.post("/register",  async (req, res) => {

    let {email, password } = req.body.user;
    const User = await UserModel.create({
        email,
        password
    })

    res.status(201).json({
        message: "User successfully registered",
        user: User
    })
})

module.exports =router;