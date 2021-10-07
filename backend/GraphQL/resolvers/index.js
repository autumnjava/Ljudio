const playlistResolver = require('./playlistResolver');
const userResolver = require('./userResolver');
const djRoomResolver = require('./djRoomResolver');

const { PubSub } = require("graphql-subscriptions");
global.pubsub = new PubSub();

const rootResolver = {
    Query: {
        ...playlistResolver.Query,
        ...userResolver.Query,
        ...djRoomResolver.Query
    },
    Mutation: {
        ...playlistResolver.Mutation,
        ...userResolver.Mutation,
        ...djRoomResolver.Mutation
    },
    Subscription: {
        ...userResolver.Subscription,
        ...playlistResolver.Subscription,
        ...djRoomResolver.Subscription,
    }
}

module.exports = rootResolver;