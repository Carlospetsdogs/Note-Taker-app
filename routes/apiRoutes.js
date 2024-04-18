const router = require('express').Router();
const fs = require('fs');
const path = require('path');
let db = require('../db/db.json');

// allowing the app to request and respond
router.get('/notes', (req, res) => {
    res.json(db)
});

router.post('/notes', (req, res) => {
    let newNote = {
        title: req.body.title,
        text: req.body.text,

    }

    db.push(newNote)
    fs.writeFileSync('./db/db.json', JSON.stringify(db))
    res.json(db)
});


router.delete('/notes/:id', (req, res) => {
    store
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch((err) => res.status(500).json(err));
});


// exporting app 
module.exports = router;