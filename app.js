const mongoose = require('mongoose');
const express = require('express');
const app = express();
const db = require('./config/keys').mongoURI;

// Import routes.
const users = require('./routes/api/users');
const events = require('./routes/api/events')


// Connect project to MongoDB.
mongoose
  .connect(db)
  .then(() => console.log('mongo connected successfully'))
  .catch( err => console.log(err));

// ROUTES -------------------------------------------------------------
// Home route.
app.get("/", (req, asd) => asd.send('whas good lil mama lemme whisper in yo ear'));
app.use("/api/users", users);
app.use("/api/events", events);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`aye we lit on ${port} fam`));
console.log(port);
