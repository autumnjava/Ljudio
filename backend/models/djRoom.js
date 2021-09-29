const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const djRoomSchema = new Schema({
    name: {
        type: String,
    },
    description: String,
    isOnline: Boolean,
});

module.exports = mongoose.model('DjRoom', djRoomSchema);

