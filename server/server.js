const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const bodyParser = require('body-parser');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

// bodyParser.json is now deprecated. express.json uses middleware to parse JSON data from API calls and HTTP requests.
app.use(express.json());

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  introspection: true,
  typeDefs,
  resolvers,

  formatError: (error) => error,

  context: ({ req, res }) => {
    return {
      req,
      res,
    };
  },
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};
  
// Call the async function to start the server
  startApolloServer();