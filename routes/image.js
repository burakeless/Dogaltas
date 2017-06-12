var express = require('express');
var router = express.Router();

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

const testFolder = './public/images';
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('image');
});

router.get('/get', function(req, res){
    var imgs = [];
    fs.readdir(testFolder, (err, files) => {
        if (err) { console.log(err); }
        for (var i = files.length - 1; i >= 0; i--) {
            console.log(files[i])
            imgs.push(files[i]);
        }
        res.render('showimages', { 
            title: 'upload',
            images: imgs
        });
    }); 
});

router.post('/api/Upload', function(req, res){
	upload(req, res, function (err) {
        if (err) {
            return res.end("Something went wrong!");
        }
        return res.end("File uploaded sucessfully!.");
    });
});

module.exports = router;
