const bodyParser = require('body-parser');
module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('views/osc')
  })
};
