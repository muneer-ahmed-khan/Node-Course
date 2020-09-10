const express = require('express');
const hbs = require('hbs')

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials/')
app.set('view engine', 'hbs')
// middleware
app.use(express.static(__dirname + '/public'))

app.use((req, res, next) => {
  var now = new Date().toString();
  console.log(now)
  next();
})

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => {
  // console.log(text)
  return text
})

app.get('/', (req, res) => {
  // res.send('hello express')
  res.render('home.hbs',{
    pageTitle:'Home Page'
  })
});

app.get('/about', (req, res) => {
  res.render('about.hbs',{
    pageTitle:'About Page',
    currentYear: new Date().getFullYear()
  })
});

app.listen(port, () => {
  console.log('server is runing')
});
