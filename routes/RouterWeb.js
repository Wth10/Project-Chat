const express = require('express');
const router = express.Router();

router.get('/', function (_req, res, _next) {
	res.render('index');
});

router.get('/login', function (_req, res, _next) {
	res.render('login');
});

router.get('*', function (_req, res) {
	res.render('erro404');
});

module.exports = router;
