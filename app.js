const express = require('express');
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.render('home', {
    pageTitle: 'Home'
  });
});

app.get('/about', (request, response) => {
  response.render('about', {
    pageTitle: 'About'
  });
});

app.get('/works', (request, response) => {
  response.render('works', {
    pageTitle: 'Works'
  });
});

app.get('/photogallery', (request, response) => {
  response.render('photogallery', {
    pageTitle: 'Photo Gallery'
  });
});

app.listen(3099);
