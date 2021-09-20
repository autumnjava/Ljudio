const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const djRoomSchema = new Schema({
    name: {
        type: String, 
        unique: true
    },
    description: String,
    isOnline: Boolean,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
});

module.exports = mongoose.model('DjRoom', djRoomSchema);

