const express = require('express');
const router = express.Router();

router.get('/', function (_req, res, _next) {
	res.render('login');
});

router.post('/chat', function (_req, res, _next) {
	res.render('chat');
});

router.get('*', function (_req, res) {
	res.render('erro404');
});

module.exports = router;
