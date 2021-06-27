const router = require("express").Router();
const { UserModel } = require("../models");
const { UniqueConstraintError } = require("sequelize/lib/errors")


router.post("/register", async (req, res) => {
  let { email, password } = req.body.user;
  try {
    const User = await UserModel.create({
      email,
      password,
    });

    res.status(201).json({
      message: "User successfully registered",
      user: User,
    });
  } catch (err) {
    if (err instanceof UniqueConstraintError) {
      res.status(409).json({
        message: "Email already in use",
      });
    } else {
      res.status(500).json({
        message: "Failed to register user",
      });
    }
  }
});

router.post('/login', async (req,res) => {
    let {email, password } = req.body.user;

    try {
        // why line 36 do we need the const loginuser
        const loginUser = await UserModel.findOne({
            where: {
                email: email,
            },
        })

        console.log('login')

        res.status(200).json({
            user:loginUser,
            message: "This is a message"
        })


    } catch (err) {
        res.status(500).json({
            message:"Unable to login"
        })
    }

})

module.exports = router;
