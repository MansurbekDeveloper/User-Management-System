const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql');

require('dotenv').config();

const app = express();
const port = 5000;

// Parsing middleware
// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false })); // Remove
app.use(express.urlencoded({extended: true})); // New

// Parse application/json
// app.use(bodyParser.json()); // Remove
app.use(express.json()); // New

// Static Files
app.use(express.static('public'));

// Templating Engine
app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');

// Routes
const routes = require('./server/routes/user');
app.use('/', routes);

// Listen on port 5000
app.listen(port, () => console.log(`Listening on port ${port}`));