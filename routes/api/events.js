const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => res.json('in events page'))

module.exports = router;
