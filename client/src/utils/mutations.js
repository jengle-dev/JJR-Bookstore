import { gql } from '@apollo/client';

// LOGIN_USER
export const LOGIN_USER = gql`
    mutation loginUser($username: String!, $email: String!, $password: String!) {
        loginUser(username: $username, email: $email, password: $password) {
            userId
            username
            email
            password
            phoneNumber
            savedFavBooks
        }
    }
`;

// Add or sign-up a new user
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            userId
            username
            email
            password
        }
    }
`;

// Allows a user to edit/update certain fields
export const UPDATE_USER_PROFILE = gql`
    mutation updateUserProfile($username: String!, $email: String!, $password: String!, $phoneNumber: String!) {
        updateUserProfile(username: $username, email: $email, password: $password, phoneNumber: $phoneNumber) {
            userId
            username
            email
            password
            phoneNumber
        }
    }
`;

// Save a favorite book to the user's profile
export const SAVE_FAVBOOK = gql`
    mutation saveFavBook( $authors: [String!]!, $description: String, $title: String!, $bookId: String!, $image: String, $link: String) {
        saveBook(authors: $authors, description: $description, title: $title, bookId: $bookId, image: $image, link: $link) {
            userId
            authors
            description
            bookId
            title
            image
            link
        }
    }
`;

// Removes a book from a user's favorites list
export const REMOVE_FAVBOOK = gql`
    mutation removeFavBook($userId: String!, $bookId: String!) {
        removeBook(userId: $userId, bookId: $bookId) {
            bookId
            userId
        }
    }
`;

// Add product to shopping cart
export const ADD_TO_CART = gql`
    mutation addToCart($productId: ID!, $quantity: Int!) {
        addToCart(productId: $productId, quantity: $quantity) {
            userId
            productId
            quantity
        }
    }
`;

// Remove product from shopping cart
export const REMOVE_FROM_CART = gql`
    mutation removeFromCart($productId: ID!, quantity: Int!, $userId: ID!) {
        removeFromCart(productId: $productId, quantity: $quantity, userId: $userId) {
            productId
            quantity
            userId
        }
    }
`;

// Checkout/purchase products in cart array
export const CHECKOUT = gql`
    mutation checkout($productId: ID!, $quantity: Int!, $userId: ID!) {
        checkout(productId: $productId, quantity: $quantity, userId: $userId) {
            productId
            quantity
            userId
            cartItems
        }
    }
`;
