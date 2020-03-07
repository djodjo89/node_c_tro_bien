const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());

const fileParse = require('./fileParser');

const port = 8000;

app.get('/hello-world', function (req, res) {
    res.send('Hello world!');
});

app.post('/character', function (req, res) {

    fileParse(req.body.first_name, function (information) {
        res.json(information);
    });
});

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});
