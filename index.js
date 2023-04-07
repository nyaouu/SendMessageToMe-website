const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/send', (req, res) => {
    res.sendFile( __dirname + '/public/index.html');
});

app.post('/submit', (req, res) => {
    const message = req.body.message;
    payload = {
        message: message
    };
    console.log(payload);
    res.sendFile( __dirname + '/public/success.html');
});

const server = app.listen(port, () => {
    const port = server.address().port

    console.log(`Listening at http://127.0.0.1:${port}`)
});