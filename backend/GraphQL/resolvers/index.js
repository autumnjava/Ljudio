const playlistResolver = require('./playlistResolver');
const userResolver = require('./userResolver');

const rootResolver = {
    Query: {
        ...playlistResolver.Query,
        ...userResolver.Query
    },
    Mutation: {
        ...playlistResolver.Mutation,
        ...userResolver.Mutation
    },
    // Subscription: {}
}

module.exports = rootResolver;