const playlistResolver = require('./Playlist/playlist');
const userResolver = require('./User/userResolver');

const rootResolver = {
    ...playlistResolver,
    ...userResolver,
}

module.exports = rootResolver;