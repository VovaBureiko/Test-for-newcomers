var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
var app = express();
var router = express.Router();
var sequelize = require('sequelize');

const connection = new sequelize({
    dialect: 'mssql',
    dialectOptions : {
        connectionString : 'data source=DESKTOP-L7RDIFG\SQLEXPRESS;initial catalog=Diplom;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework" providerName="System.Data.SqlClient'
    }
});

// app.use(mainPage);


app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname, 'dist/index.html'));
});

const port = 9000;

app.listen(port, function() { 
    console.log('Server is running on port', port);
    connection.authenticate().then(() => {console.log('Connection to database is connected')})
                              .catch((err) => console.log(err));
}); 