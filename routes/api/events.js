const express = require('express');
const router = express.Router();

router.get('/events', (req, res) => res.send('in events page'))

module.exports = router;
