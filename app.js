const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser);

app.get('/jsondata', (req, res) => {
    res.sendFile(__dirname + '/src/data.json');
});

app.listen(3000)