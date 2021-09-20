const userResolver = require('./userResolvers');

const rootResolver = {
    ...userResolver
}

module.exports = rootResolver;