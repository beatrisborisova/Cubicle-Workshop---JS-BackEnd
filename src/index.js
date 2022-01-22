const express = require('express');
const app = express();

app.all('/', (req, res) => {
    res.write('It\'s working!');
    res.end();
});
app.listen(3000, console.log.bind(console, 'Application is running on http://localhost:3000')); // тука console.log-а може и с arrow funcition