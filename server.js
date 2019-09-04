const express = require('express');
const port = process.env.PORT || 3000;
const hbs = require('hbs');
require('./hbs/helpers');

app = express();

app.use(express.static(__dirname + '/public'));

//Express hbs
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'ronald'
    });
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.listen(port, () => {

});