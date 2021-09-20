// import mongoose module
const mongoose = require('mongoose');
const express = require('express');
const app = express();
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

  mongoose.set('useCreateIndex', true);
  mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
   
const connection = mongoose.connection;
  
console.log('hello');

  connection.once('open', () => {
    console.log('Database connected!')
  });


app.listen(4000);