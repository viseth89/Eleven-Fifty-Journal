const Express = require('express');
const router = Express.Router();
let validateJWT = require("../middleware/validate-jwt");

router.get('/practice', validateJWT, (req, res) => {
    res.send('Hey')
});

router.get('/about', (req,res) => {
    res.send('This is about')
})
module.exports = router