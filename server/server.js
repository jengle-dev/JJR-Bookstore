const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const connectDB = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// Create an ApolloServer instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Connect to the database
connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Start the ApolloServer and the Express app
server.start().then(() => {
  server.applyMiddleware({ app });
  
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
