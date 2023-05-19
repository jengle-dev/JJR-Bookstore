const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        _id: ID
        bookId: String
        authors: [String]
        description: String
        title: String!
        image: String
        link: String
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        bookCount: Int
        savedBooks: [Book]
    }

    # Query that will always find and return the logged in user's data
    type Query {
        me(userId: ID!): User
    }

    # JWT authentication
    type Auth {
        token: ID!
        user: User!
    }

    # Permissible mutations the user may execute from the client side
    type Mutation {
        # Sets the data structure for adding a new user
        addUser(username: String!, email: String!, password: String!): Auth
        
        # Sets the data structure for a user logging in
        loginUser(email: String!, password: String!): Auth
        
        # Sets the data structure for removing a saved book from the user's profile
        removeBook(userId: ID!, bookId: String!): User
        
        # Sets the data structure for saving a book to the user's profile
        saveBook(userId: ID!, authors: [String!]!, description: String!, title: String!, bookId: String!, image: String, link: String): User
    }
`;

module.exports = typeDefs;