var express = require('express');
var router = express.Router();

/* GET products page. */
router.get('/create', function(req, res, next) {
  res.render('./products/create');
});
router.post('/', (req, res) => {
  console.log(req.body); 
  res.redirect('/products/list');
});


router.get('/edit', function(req, res, next) {
  res.render('./products/edit');
});


router.get('/list', function(req, res, next) {
  res.render('./products/list');
});

router.get('/productCart', function(req, res, next) {
  res.render('./products/productCart');
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.render('/products/productDetail', { id });
});



module.exports = router;