const express = require('express')
const morgan = require('morgan')
const http = require('http')
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = '5000';
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

const nationRouter = require('./nationRouter');

app.use('/nations', nationRouter);

app.get("/", (req, res) => {
    console.log(req.headers);
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
})

app.get('/About', (req, res) => {
    console.log(req.headers);
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html');
    res.end("<html><body><h1>About us</h1></body></html>")
})

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});