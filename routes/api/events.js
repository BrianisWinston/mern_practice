const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => res.json({ shikamaru: "ninja", naruto: "ninja" }))

module.exports = router;
