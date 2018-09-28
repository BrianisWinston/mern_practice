const express = require('express');
const app = express();

app.get("/", (req, asd) => asd.send('whas good lil mama lemme whisper in yo ear'));

const port = process.env.PORT || 3000;

app.listen(port, () => `aye we lit on ${port} fam`);
console.log(port);
