var express = require('express');
var app = express();
var db = require('./database');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: true
}));

var cors = require('cors');
app.use(cors());

// index page
app.get('/', function (req, res) {
    res.send('Express is running');
});

var output = {
    status: 'success',
    message: 'REST API is working'
};

app.get('/api/json', function (req, res) {
    res.status(500).json(output);
});

app.get('/api/products/', db.getAllProducts);
app.get('/api/products/:id', db.getProductByID);
app.post('/api/products/', db.insertProduct);
app.put('/api/products/:id', db.updateProduct);
app.delete('/api/products/:id', db.deleteProduct);

app.get('/api/users/', db.getAllUsers);
app.get('/api/users/:id', db.getUserByID);
app.post('/api/users/', db.insertUser);
app.put('/api/users/:id', db.updateUser);
app.delete('/api/users/:id', db.deleteUser);

var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('App is running on http://localhost:' + port);
});