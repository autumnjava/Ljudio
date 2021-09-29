const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

// import mongoose module
const mongoose = require('mongoose');

require('dotenv').config();

const typeDefs = require('./GraphQL/schema/schema');
const resolvers = require('./graphql/resolvers/index');

async function startServer(typeDefs, resolvers){
  const app = express();
  // we need this to allow requests from another server (in this case localhost:3000)
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if(req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
})

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
      // options
    })
  ]
});


await apolloServer.start();

apolloServer.applyMiddleware({app});

await mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Mongoose connected!'));

app.listen(4000, () => {
  console.log('Server started and running on port 4000')
});
}

startServer(typeDefs, resolvers);
