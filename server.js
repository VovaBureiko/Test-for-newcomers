var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();

const port = 9000;

app.listen(port, () => console.log('Server is running on port', port));