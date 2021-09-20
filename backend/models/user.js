const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    djRoom: {
        type: Schema.Types.ObjectId,
        ref: 'DjRoom'
    },
    myPlaylists: [{
        type: Schema.Types.ObjectId,
        ref: 'Playlist'
    }],
})

module.exports = mongoose.model('User', userSchema);