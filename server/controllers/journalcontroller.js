const Express = require('express');
const router = Express.Router();

router.get('/practice', (req, res) => {
    res.send('Hey')
});

router.get('/about', (req,res) => {
    res.send('This is about')
})
module.exports = router