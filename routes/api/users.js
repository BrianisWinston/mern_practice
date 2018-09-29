const express = require('express');
const passport = require('passport');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const User = require('../../models/User');
const keys = require('../../config/keys')

router.get('/test', (req, res) => res.send('In users page.'));


// Create new user
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ name: req.body.name })
    .then( user => {
      if (user) {
        errors.name = "User already exists";
        return res.status(400).json(errors);
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) =>{
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then( user => {
                const paylad = { id: user.id, name: user.name };

                jsonwebtoken.sign(payload,
                  keys.secretOrKey,
                  { expiresin: 3600 },
                  ( err, token ) => {
                    res.json({
                      success: true,
                      token: "Bearer " + token
                    });
                  })
              })
              .catch( err => console.log(err));
          });
        });
      };
    });
});

// Login new user
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({name})
    .then(user => {
      if (!user) {
        errors.name = "This user does not exist";
        return res.status(400).json(errors);
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = { id: user.id, name: user.name };

            jsonwebtoken.sign(
              payload,
              keys.secretOrKey,
              { expiresin: 3600 },
              ( err, token ) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                });
              });
          } else {
            errors.password = "Incorrect password";
            return res.status(400).json(errors);
          };
        });
    });
});

// Create private route for logged in users
router.get('/current', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({ msg: 'Success' });
  })

module.exports = router;
