const express = require('express');
const router = express.Router();

router.get('/', function (_req, res, _next) {
	res.render('login');
});

router.get('/chat', function (_req, res, _next) {
	res.render('chat');
});

router.post('/blog', function (_req, res, _next) {
	res.render('blog');
});

router.get('*', function (_req, res) {
	res.render('erro404');
});

module.exports = router;
