const playlistResolver = require('./playlistResolver');
const userResolver = require('./userResolver');
const djRoomResolver = require('./djRoomResolver');

const rootResolver = {
    ...playlistResolver,
    ...userResolver,
    ...djRoomResolver
}

module.exports = rootResolver;