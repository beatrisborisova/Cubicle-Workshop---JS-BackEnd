const handlebars = require('express-handlebars');
const path = require('path');
const hbs = handlebars.create({ extname: '.hbs' })

const initHandlebars = (app) => {
    app.set('views', path.resolve('./src/views'))
    
    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');
}

module.exports = initHandlebars;