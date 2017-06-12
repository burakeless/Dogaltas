var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index/index', { title: 'Express' });
});

router.get('/hakkimizda',function(req, res){
	res.render('index/hakkimizda');
});

router.get('/yonetim', function(req, res){
	res.render('index/yonetim');
});

router.get('/uyeler', function(req, res){
	res.render('index/uyeler');
});

router.get('/iletisim',function(req, res){
	res.render('index/iletisim')
});

router.post('/sendemails', function(req, res){
	console.log(req);
	res.send('hello');
});
router.get('/sendemails',function(req, res){
	console.log(req.param.contact-form)
	res.send({
		'type':'success',
		'message':'Thank you for contact us. As early as possible  we will contact you'
	});
})

module.exports = router;
