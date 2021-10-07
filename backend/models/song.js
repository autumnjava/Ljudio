const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: String,
    videoId: String,
    duration: Number,
    image: String
});

module.exports = mongoose.model('Song', songSchema);

