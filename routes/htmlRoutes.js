const router = require('express').Router();
const fs = require('fs');
const path = require('path');

// set router to get from the public index.html file
router.get('/' , ( req , res ) => {
    res.sendFile(path.join (__dirname, '../public/index.html'))
});

// then fron index to notes.html
router.get('/notes' , ( req , res ) => {
    res.sendFile(path.join (__dirname, '../public/notes.html'))
});

module.exports = router; 