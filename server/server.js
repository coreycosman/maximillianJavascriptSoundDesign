// library imports
const express = require('express')
const hbs = require('hbs');
const path = require('path');

// local imports
const publicPath = path.join(__dirname, '../public')
const app = express();
const port = process.env.PORT || 3000;

// controller imports
const oscController = require('./controllers/OSC-controller');

// CONTROLLER CONFIG
oscController(app);

// view engine
hbs.registerPartials(publicPath + '/partials')
// hbs.registerPartials(path.join(__dirname, '../public/partials'))
app.set('view engine', 'hbs');
app.set('views', publicPath)
app.use(express.static(publicPath))

// middleware
app.listen( port, () => {
  console.log(`server up on: ${port}`);
});
// exports
module.exports = { app }
