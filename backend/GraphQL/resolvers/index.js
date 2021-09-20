const playlistResolver = require('./playlistResolver');
const userResolver = require('./userResolver');

const rootResolver = {
    ...playlistResolver,
    ...userResolver,
}

module.exports = rootResolver;