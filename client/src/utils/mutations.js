import { gql } from '@apollo/client';

// LOGIN_USER
export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
        _id
        email
        password
    }
}
`;

// ADD_USER  -- not sure if this is correct, if the book count and saved books would be necessary in this mutation 
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        _id
        username
        email
        password
        # bookCount
        # savedBooks
    }
}
`;

// SAVE_BOOK
export const SAVE_BOOK = gql`
mutation saveBook( $authors: [String!]!, $description: String, $title: String!, $bookId: String!, $image: String, $link: String) {
    saveBook(authors: $authors, description: $description, title: $title, bookId: $bookId, image: $image, link: $link) {
        _id
        authors
        description
        bookId
        title
        image
        link
    }
}
`;

// REMOVE_BOOK -- does it know to go back to typeDefs to get associated user to compare current user?
export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
        _id
        bookId
    }
}
`;
