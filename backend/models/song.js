const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const songSchema = new Schema({
    artist: [String], 
    title: String,
    duration: Number,
    videoId: String
});

module.exports = mongoose.model('Song', songSchema);

