var Schema = require('mongoose').Schema;

var mySchema = Schema({
    title: String,
    desc: String,
    createDate: Date,
    updateDate: Date
});

/* global db */
module.exports = db.model('Post', mySchema);