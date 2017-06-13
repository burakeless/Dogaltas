var express = require('express');
var router = express.Router();

var model = require('../models/post');

var multer = require('multer');
var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./public/images");
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});
var upload = multer({ storage: Storage }).array("imgUploader", 3); 


router.use('/',function(req, res, next){
	console.log(new Date());
	next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/admin', { title: 'Admin' });
});

router.get('/create', function(req, res){
	res.render('admin/createevent',{
		title:'admin'
	});
});

router.get('/all', function(req, res){
	model.find(function(err, docs) {
        if (err) return next(err);
        res.send(docs);
    });
});
//todo önce dosya sonra image upload ekranı açılcak

router.post('/create', function(req, res){
	upload(req, res, function (err) {
        if (err) {
            return res.end("Something went wrong!");
        }
        return res.end("File uploaded sucessfully!.");
    });
});



module.exports = router;
