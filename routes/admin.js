var express = require('express');
var router = express.Router();

router.use('/',function(req, res, next){
	console.log('hello');
	next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/admin', { title: 'Admin' });
});


module.exports = router;
