var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const port = 9000;

app.createServer({controllers: __dirname + '/controllers/'});
app.listen(port, () => console.log('Server is running on port', port));