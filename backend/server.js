// import mongoose module
const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const gql = require('graphql-tag');

const graphQlResolvers = require('./graphql/resolvers/index');
const schema = require('./GraphQL/schema/schema');

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

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: graphQlResolvers,
  graphiql: true,
}));

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Database connected!'));

app.listen(4000);