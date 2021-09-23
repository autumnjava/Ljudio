// import mongoose module
const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const gql = require('graphql-tag');
// Subscriptions
const ws = require('ws');
const { useServer } = require('graphql-ws/lib/use/ws');
const { execute, subscribe } = require('graphql');

const graphQlResolvers = require('./graphql/resolvers/index');
const schema = require('./GraphQL/schema/schema');

app.get('/', (req, res) => res.send('GraphQL Server is running'))

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: graphQlResolvers,
  graphiql: true,
}));

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Database connected!'));

const server = app.listen(4000, () => {
  const path = 'https://localhost:4000/subscriptions'
  console.log('GrapQL server is running on https://localhost:4000/graphql');

  // create and use the websocket server
  const wsServer = new ws.Server({
    server,
    path
  });

  useServer({
    schema,
    execute,
    subscribe,
    onConnect: (ctx) => {
      console.log('Connected');
    },
    onError: (ctx, msg, errors) => {
      console.log('Error: ', errors);
    }
  }, wsServer);

  console.log('Subscriptions is listening on websocket connection https://localhost:4000/subscriptions');
});
