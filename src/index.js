const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();

//app.set('views', path.resolve(__dirname + '/views'));
const hbs = handlebars.create({ extname: '.hbs' })

app.set('views', path.resolve('./src/views'))

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.all('/', (req, res) => {
    res.render('index')
});
app.listen(3000, console.log.bind(console, 'Application is running on http://localhost:3000')); // тука console.log-а може и с arrow funcition