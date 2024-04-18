const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
let db = require('../db/db.json');

const store = require('../db/store');

// allowing the app to request and respond
router.get('/notes', (req, res) => {
    // when they fetch again.. waht are they getting?? what is in memory!!!
    res.json(db)
});

router.post('/notes', (req, res) => {
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),

    }

    db.push(newNote)
    fs.writeFileSync('./db/db.json', JSON.stringify(db))
    res.json(db)
});


router.delete('/notes/:id', (req, res) => {
    store
        .removeNote(req.params.id)
        .then((arr) => {
            let n = store. getNotes().then(function(latestNotes) {

                db = latestNotes;

                res.json({ ok: true });
            })


        })
        .catch((err) => res.status(500).json(err));
});


// exporting app 
module.exports = router;