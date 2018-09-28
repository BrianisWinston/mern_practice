const express = require('express');
const router = express.router();

router.get('/users', (req, res) => res.send('In users page.'));

module.exports = router;
