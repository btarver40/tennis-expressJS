var express = require('express');
var router = express.Router();
var Tennis = require('../models').Tennis;

/* GET movie listings. */
router.get('/', function(req, res) {
  Tennis.all()
    .then( function(tennis) {
      return res.render('tennis', { tennis: tennis });
  })
});

/* POST add movie listing */
router.post('/', function(req, res) {
  var title = req.body.title;
  Tennis.create({ title: title })
    .then( function() {
      res.redirect('/tennis');
  });
});

module.exports = router;