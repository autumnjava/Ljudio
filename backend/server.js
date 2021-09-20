// import mongoose module
const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');


// Construct a schema, using GraphQL schema language
// Maybe in a schema file under models??? 

// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// The root provides a resolver function for each API endpoint

// var root = {
//   hello: () => {
//     return 'Hello world!';
//   },
// };

app.use('/graphql', graphqlHTTP({
  // schema: schema,
  // rootValue: root,
  graphiql: true,
}));

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Database connected!'));

app.listen(4000);