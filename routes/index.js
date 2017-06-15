var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index/index', {
  	title: 'Ana Sayfa',
  	active: 0
  });
});

router.get('/hakkimizda',function(req, res){
	res.render('index/hakkimizda',{
		title:'Hakkımızda',
		active:1
	});
});

router.get('/yonetim', function(req, res){
	res.render('index/yonetim',{
		title:'Yönetim',
    subtitle1:'Yönetim Kurulu',
    subtitle2:'Denetim Kurulu',
		active:2
	});
});

router.get('/uyeler', function(req, res){
	res.render('index/uyeler',{
		title:'Üyeler',
		active:3
	});
});

router.get('/iletisim',function(req, res){
	res.render('index/iletisim',{
		title:'İletişim',
		active:4
	});
});

router.get('/detay/:image', function(req, res){
	res.render('index/detail',{
			title:'express',
			active:4
	});
});

router.get('/login',function(req, res){
	res.render('admin/login', { title: 'Admin' });
});
router.post('/login', function(req, res){
	res.redirect('../admin');
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
