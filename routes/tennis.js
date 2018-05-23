var express = require('express');
var router = express.Router();
var Tennis = require('../models').Tennis;

/* GET movie listings. */
router.get('/', function(req, res) {
  Tennis.all({
    order: [
      ['createdAt', 'ASC']
    ]
  })
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

router.get(':id/edit', function(req, res){
  Tennis.findById(req.params.id)
  .then(function(tennis){
    return res.render('edit', {tennis: tennis});
    })
  })

  router.put('/:id', function(req, res) {
    Tennis.update(
      { title: req.body.title },
      { where: { id: req.params.id } }
    )
    .then( function() {
      return res.redirect('/tennis');
    })
  });


module.exports = router;