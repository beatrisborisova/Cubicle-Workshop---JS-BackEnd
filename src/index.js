const express = require('express');
const app = express();
require('./config/handlebars')(app);
const path = require('path');

//const initHandlebars = require('./config/handlebars');
//initHandlebars(app);
// - горните 2 са = require('./config/handlebars')(app);

app.use(express.static(path.resolve(__dirname + '/public')));

app.all('/', (req, res) => {
    res.render('index')
});
app.listen(3000, console.log.bind(console, 'Application is running on http://localhost:3000')); // тука console.log-а може и с arrow funcition