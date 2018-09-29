const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Event = require('../../models/Event');
const validateEventInput = require('../../validation/events');

router.get('/test', (req, res) => res.json({ shikamaru: "ninja", naruto: "ninja" }))



module.exports = router;
