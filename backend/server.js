// import mongoose module
const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');

const graphQlResolvers = require('./graphql/resolvers/index');

app.use('/graphql', graphqlHTTP({
  // schema: schema,
  rootValue: graphQlResolvers,
  graphiql: true,
}));

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Database connected!'));

app.listen(4000);