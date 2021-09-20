const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    name: String,
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }],

    // maybe need this later, maybe not, but keep it so far
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Playlist', playlistSchema);

