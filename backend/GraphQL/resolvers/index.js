const playlistResolver = require('./playlistResolver');
const userResolver = require('./userResolver');

const { PubSub } = require("graphql-subscriptions");
global.pubsub = new PubSub();

const rootResolver = {
    Query: {
        ...playlistResolver.Query,
        ...userResolver.Query
    },
    Mutation: {
        ...playlistResolver.Mutation,
        ...userResolver.Mutation
    },
    Subscription: {
        ...userResolver.Subscription
    }
}

module.exports = rootResolver;