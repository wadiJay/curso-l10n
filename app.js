var express = require('express')
var hbs = require('hbs');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials/');
app.set('view engine', 'hbs');



app.get('/', (req,res) => {
    res.render('index.hbs')
});
app.get('/empresa', (req,res) => {
    res.render('empresa.hbs')
});
app.get('/gestion', (req,res) => {
    res.render('gestion.hbs')
});
app.get('/servicios', (req,res) => {
    res.render('servicios.hbs')
});
app.get('/productos', (req,res) => {
    res.render('productos.hbs')
});
app.get('/comex', (req,res) => {
    res.render('comex.hbs')
});
app.use(function (req, res) {
    res.render('404.hbs');
});
app.listen(port);