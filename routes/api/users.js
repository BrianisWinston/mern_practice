const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User.js');

router.get('/test', (req, res) => res.send('In users page.'));

router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email })
    .then( user => {
      if (user) {
        return res.status(400).json({ email: "A user has already registered with this address" });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
      };
    });
});

module.exports = router;
