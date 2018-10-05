const mongoose = require('mongoose');
const express = require('express');
const app = express();
const passport = require('passport');
app.use(passport.initialize());
require('./config/passport')(passport);

// Import body parser to parse JSON sent to frontend.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Import routes.
const users = require('./routes/api/users');
const events = require('./routes/api/events')

// Connect project to MongoDB.
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db)
  .then(() => console.log('mongo connected successfully'))
  .catch( err => console.log(err));

// ROUTES -------------------------------------------------------------
// Home route.
app.get("/", (req, asd) => asd.send('root route'));
app.use("/api/users", users);
app.use("/api/events", events);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`aye we lit on ${port} fam`));
console.log(port);
