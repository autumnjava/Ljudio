const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    name: String,
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }],
    djRoomId: {
        type: Schema.Types.ObjectId,
        ref: 'DjRoom'
    }
});

module.exports = mongoose.model('Playlist', playlistSchema);

