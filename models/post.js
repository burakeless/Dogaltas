var Schema = require('mongoose').Schema;

var mySchema = Schema({
    title: String,
    desc: String,
    createDate: Date,
    updateDate: Date,
    photos: [String]
});

/* global db */
module.exports = db.model('Post', mySchema);