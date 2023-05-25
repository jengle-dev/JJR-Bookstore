const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { gql } = require('apollo-server');
const mongoose = require('mongoose');
const path = require('path');
require("dotenv").config();
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');


const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/jjr-bookstore').then(() => {
  console.log("Connected to MongoDB!");
})
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Apply authMiddleware
app.use(authMiddleware);

// Create a new instance of an Apollo server with the GraphQL schema
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res }),
});

// Apply ApolloServer middleware to Express app
server.applyMiddleware({ app, path: '/graphql' });


app.listen(PORT, () => {
  console.log(`API MongoDB server running on port ${PORT}!`);
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});
