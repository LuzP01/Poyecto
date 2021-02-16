const express = require('express');
const router = express.Router();

router.get('/forms/add', (req, res) => {
    res.render('forms/new-form');
});

router.get('/forms', (req, res) =>{
    res.send('Forms desde la bd');
});

module.exports = router;