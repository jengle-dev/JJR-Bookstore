const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const bodyParser = require('body-parser');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

// app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  // What is introspection? Do we need it?
  introspection: true,
  typeDefs,
  resolvers,
  context: authMiddleware,

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