const express = require('express');
const session = require('express-session');
require('dotenv').config();

// import mongoose module
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const MongoDbStore = require('connect-mongo');


// import resolvers and schema
const graphQlResolvers = require('./graphql/resolvers/index');
const schema = require('./GraphQL/schema/schema');

const app = express();

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Database connected!'));

app.use(
  session({
      secret: 'verySecretAndHardTogGuessPassword!!!!111............',
      resave: false,
      saveUninitialized: false,
      store: MongoDbStore.create({
          mongoUrl: process.env.DB_URI
      })
  })
);

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

app.listen(4000);