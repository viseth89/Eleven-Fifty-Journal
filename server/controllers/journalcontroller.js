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
        id
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

/* 
Update A Journal
 */

router.put("/update/:entryID", validateJWT, async (req, res) => {
    const {title, date, entry} = req.body.journal;
    const journalId = req.params.entryID;
    const userId = req.user.id;

    const query = {
        where: {
            id: journalId,
            owner: userId
        }
    };

    const updatedJournal = {
        title: title,
        date: date,
        entry: entry
    };
    
    try {
        const update = await JournalModel.update(updatedJournal, query);
        res.status(200).json(update);
    } catch (err) {
        res.status(500).json({ error: err})
    }
})

/* 
Delete a Journal
*/

router.delete("/delete/:id", validateJWT, async (req,res) => {
    const ownerId = req.user.id;
    const journalId = req.params.id;

    try {
        const query = {
            where: {
                id: journalId,
                owner: ownerId
            }
        };

        await JournalModel.destroy(query);
        res.status(200).json({message: "Journal Entry Removed"})
    } catch(err) {
        res.status(500).json({ error: err})
    }
})
module.exports = router