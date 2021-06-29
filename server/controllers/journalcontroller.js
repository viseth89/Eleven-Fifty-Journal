const Express = require('express');
const router = Express.Router();
let validateJWT = require("../middleware/validate-jwt");
// Import the Journal Model
const { JournalModel} = require("../models"); 

router.get('/practice', validateJWT, (req, res) => {
    res.send('Hey this is a practice route')
});

/* 
Journal Create
*/


router.post("/create", validateJWT, async(req, res) => {
    const { title, date, entry } = req.body.journal;
    const{id} = req.user;
    const journalEntry = {
        title,
        date,
        entry,
        owner: id
    }
    try {
        const newJournal = await JournalModel.create(journalEntry);
        res.status(200).json(newJournal);
    } catch (err) {
        res.status(500).json({error:err})
    }
    JournalModel.create(journalEntry)

})

router.get('/', async (req,res) => {
    try{
        const entries = await JournalModel.findAll();
        res.status(200).json(entries);
    } catch (err) {
        res.status(500).json({error:err})
    }
})

/* 
Get Journals by User
*/

router.get("/mine", validateJWT, async(req, res) => {
    const {id} = req.user;
    try {
        const userJournals = await JournalModel.findAll({
            where: {
                owner: id
            }
        });
        res.status(200).json(userJournals);
    } catch (err) {
        res.status(500).json({error: err})
    }
})


/* 
Get Journals by Title
 */

router.get("/ttittle", async (req, res) => {
    const {title} = req.params;
    try {
        const results = await JournalModel.findAll({
            where: { title: title}
        });
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: err})
    }
})
module.exports = router