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
        userId: ID
        username: String!
        email: String!
        password: String!
        phoneNumber: String
        savedBooks: [Book]
        orders: [Order]
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
        productId: ID!
        items: [CartItemInput!]!
    }

    # Items currently awaiting purchase. Items can be removed.
    # input CartItemInput {
    #     _id: ID!
    #     product: Product!
    #     quantity: Int!
    #     price: Int!
    # }

    # User's past purcahse data -- NICE TO HAVE. NOT A PRIORITY FOR MVP USER PROFILE.
    type Order {
        _id: ID!
        items: [OrderItems!]!
        orderDate: date
        total: Float!
        # What other fields related to an order do we need?
    }

    # The product/book that is added to a cart for ordering
    type Product {
        productId: ID!
        imageURL: String
        name: String!
        author: String
        description: String
        price: Float!
        quantity: Int
    }

    # # Sets the fields a user can update
    # input UpdateUserProfileInput {
    #     username: String
    #     email: String
    #     password: String
    #     phoneNumber: String
    # }

    # Permissible mutations the user may execute from the client side
    type Mutation {
        # Sets the data structure for adding a new user
        addUser(username: String!, email: String!, password: String!): Auth
        
        # Sets the data structure for a user logging in
        loginUser(email: String!, password: String!): Auth

        # Allows a user to update their profile
        updateUserProfile(input: UpdateUserProfileInput!): User!
        
        # Sets the data structure for removing a saved book from the user's profile
        removeFavBook(userId: ID!, bookId: String!): User
        
        # Sets the data structure for saving a book to the user's profile
        saveFavBook(userId: ID!, authors: [String!]!, description: String!, title: String!, bookId: String!, image: String, link: String): User

        # Add to shopping cart
        addToCart(productId: ID!, quantity: Int!): ShoppingCart

        # Remove from shopping cart
        removeFromCart(productId: ID!): ShoppingCart

        # checkout
        checkout(cartItems: [CartItemInput!]!): Order!
    }
`;

module.exports = typeDefs;