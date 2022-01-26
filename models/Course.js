const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxlength: 255},
    decription: {type: String, maxlength: 600},
    image: {type: String, maxlength: 255},
    CreatedAt: {type: Date, default: Date.now},
    UpdatedAt: {type: Date, default: Date.now},
    slug: {type: String}
});

module.exports = mongoose.model('Course', Course);