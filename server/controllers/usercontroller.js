const router = require('express').Router();
const { UserModel } = require('../models');

router.post("/register",  async (req, res) => {

    let {email, password } = req.body.user;
    await UserModel.create({
        email,
        password
    })

    res.send("This is our user/register endpoint!")
})

module.exports =router;