const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const songSchema = new Schema({
    artist: [String], 
    title: String,
    album: String,
    duration: Number,
    videoId: Number
});

module.exports = mongoose.model('Song', songSchema);

