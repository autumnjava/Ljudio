const playlistResolver = require('./Playlist/playlistResolver');
const userResolver = require('./User/userResolver');

const rootResolver = {
    ...playlistResolver,
    ...userResolver,
}

module.exports = rootResolver;