const playlistResolver = require('./playlist');
const userResolver = require('./user');

const rootResolver = {
    ...playlistResolver,
    ...userResolver,
}

module.exports = rootResolver;