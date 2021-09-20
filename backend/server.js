/* eslint-disable no-useless-catch */

// import mongoose module
const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const gql = require('graphql-tag');

const resolvers = require('./graphql/resolvers')

const userSchema = buildSchema(`
input UserInput {
  email: String!
  username: String!
  password: String!
}

type User {
  _id: ID!
  email: String!
  username: String!
  password: String
  djRoom: String
  myPlaylists: [String]
}

type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!
}


type RootQuery {
  login(email: String!, password: String!): AuthData!
}

type RootMutation {
  createUser(userInput: UserInput): User
}

schema {
  query: RootQuery
  mutation: RootMutation
}

`);

app.use('/graphql', graphqlHTTP({
  schema: userSchema,
  rootValue: resolvers,
  graphiql: true,
}));

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Database connected!'));

app.listen(4000);