var express = require('express');
var router = express.Router();

var model = require('../models/post');
var User = require('../models/user');


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


router.use(function(req, res, next){
	console.log(new Date());
	next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/admin', { title: 'Admin' });
});

router.get('/create', function(req, res){
	 if(req.query.xx) {
        model.find({ _id: req.query.xx},function(err, docs) {
            if (err) return next(err);
             res.render('admin/createevent',{
                title:'admin'
            });
        });
    }else{
        res.render('admin/createevent',{
    		title:'admin'
    	});
    }

});

router.get('/user',function(req, res){
    res.render('admin/createuser',{
        title: 'Uyeler'
    });
});

router.get('/getuser',function(req, res){
    User.find(function(err, docs){
        if (err) res.status(500).send('hata var abisi');
        res.render('admin/getuser',{
            title : 'Üyeler',
            users : docs
        })
    });
});

router.post('/user',function(req, res){
    var x = new User();
    x.name = req.body.name || '';
    x.save(function(err, doc){
        res.send('kaydettim.');
    }); 
})

router.get('/getevent', function(req, res){
    	model.find(function(err, docs) {
            if (err) return next(err);
            res.render('admin/getevents',{
                title : 'Faliyetler',
                users : docs
            })
        });

});
/*
    var mySchema = Schema({
        title: String,
        desc: String,
        createDate: Date,
        updateDate: Date,
        photos: [String]
    });
*/
router.post('/create', function(req, res){
        var x = new model();
        x.title = req.body.name || 'title';
        x.desc = req.body.description || 'description';
        x.save(function (err, docs) {
           if (err) {
               res.status(500).send(err)
           }
           res.redirect('/admin/create?xx=' + docs._id);
           //todo image upload
        });
});



module.exports = router;
