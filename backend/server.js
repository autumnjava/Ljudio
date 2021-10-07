const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

// to enable subscriptions: 
const { createServer } = require('http');
const { execute, subscribe } = require('graphql');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const { makeExecutableSchema } = require('@graphql-tools/schema');

// import mongoose module
const mongoose = require('mongoose');

require('dotenv').config();

const typeDefs = require('./GraphQL/schema/schema');
const resolvers = require('./graphql/resolvers/index');

async function startServer(typeDefs, resolvers){
  const app = express();

  const httpServer = createServer(app);

  const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({
  schema,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({}),
    {
    async serverWillStart() {
      return {
        async drainServer() {
          subscriptionServer.close();
        }
      };
    }
  }
]
});

const subscriptionServer = SubscriptionServer.create({
  // This is the `schema` we just created.
  schema,
  // These are imported from `graphql`.
  execute,
  subscribe,
}, {
  // This is the `httpServer` we created in a previous step.
  server: httpServer,
  // This `server` is the instance returned from `new ApolloServer`.
  path: server.graphqlPath,
});

await server.start();

server.applyMiddleware({app});

await mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Mongoose connected!'));

const PORT = 4000;

httpServer.listen(PORT, () => {
  console.log('Server started and running on port ' + PORT)
});
}

// finally start server
startServer(typeDefs, resolvers);

// NOT SURE WE NEED ALL THIS:

//   // we need this to allow requests from another server (in this case localhost:3000)
//   app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

//     if(req.method === 'OPTIONS') {
//       return res.sendStatus(200);
//     }
//     next();
// })