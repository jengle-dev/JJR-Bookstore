const { gql } = require('apollo-server-express');

const typeDefs = gql`
    # Book data from API search
    type Book {
        _id: ID
        bookId: String
        authors: [String]
        description: String
        title: String!
        image: String
        link: String
    }

    # User profile data
    type User {
        _id: ID
        username: String
        email: String
        password: String
        phoneNumber: String
        savedBooks: [Book]
        orders: [Order!]!
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

    # What a user currently plans to purchase
    type ShoppingCart {
        id: ID!
        items: [CartItemInput!]!
    }

    # Items currently awaiting purchase. Items can be removed.
    input CartItemInput {
        _id: ID!
        product: Product!
        quantity: Int!
    }

    # User's past purcahse data
    type Order {
        _id: ID!
        items: [OrderItems!]!
        total: Float!
        # What other fields related to an order do we need?
    }

    # Books from the carousel that are available to order/purchase
    type OrderItem {
        _id: ID!
        product: Product!
        quantity: Int!
    }

    # The product/book that is added to a cart for ordering
    type Product {
        id: ID!
        name: String!
        price: Float!
    }

    # Sets the fields a user can update
    input UpdateUserProfileInput {
        username: String
        email: String
        password: String
        phoneNumber: String
    }

    # Permissible mutations the user may execute from the client side
    type Mutation {
        # Sets the data structure for adding a new user
        addUser(username: String!, email: String!, password: String!): Auth
        
        # Sets the data structure for a user logging in
        loginUser(email: String!, password: String!): Auth

        # Allows a user to update their profile
        updateUserProfile(input: UpdateUserProfileInput!): User!
        
        # Sets the data structure for removing a saved book from the user's profile
        removeBook(userId: ID!, bookId: String!): User
        
        # Sets the data structure for saving a book to the user's profile
        saveBook(userId: ID!, authors: [String!]!, description: String!, title: String!, bookId: String!, image: String, link: String): User

        # Add to shopping cart
        addBookToCart(bookId: String!, quantity: Int!): ShoppingCart

        # Remove from shopping cart
        removeBookFromCart(bookId: String!): ShoppingCart

        # checkout
        checkout(cartItems: [CartItemInput!]!): Order!
    }
`;

module.exports = typeDefs;