const express = require('express');
const router = express.Router();

router.get('/', function(_req, res, _next) {
    res.render('index');
});

router.get('/login', function(_req, res, _next) {
    res.render('login');
});

module.exports = router;