import React, { useState, useEffect } from 'react';
//import Chakra styling
import { Container, Flex, Box, Input, IconButton, Form, Row, Col, Button, Card, Text } from '@chakra-ui/react';
import Auth from '../utils/auth';
import { SearchBar } from '../components/SearchBar';
import { useMutation } from '@apollo/client';
import { SAVE_FAV_BOOK } from '../utils/mutations';
import { saveBookIds, getSavedBookIds } from '../utils/localStorage';

// Component below searches in the OpenLibrary to return the ISBN which is the searchInput data inserted below https://openlibrary.org/search.json?q=*
const SearchBooks = () => {
  // create state for holding returned open library api data / ISBN
  const [searchedBooks, setSearchedBooks] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');
  // create state to hold saved bookId values
  const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds());


  // // Allows a user to add a searched book to their favorites list - list located on the user profile page
  // const [saveFavBook] = useMutation(SAVE_FAV_BOOK);


  // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
  useEffect(() => {
    return () => saveBookIds(savedBookIds);
  });

  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
        // Open Library API call
        const openLibReply = await fetch(
          `https://openlibrary.org/search.json?q=${searchInput}`
        );
        
        // Searches Open Library for an ISBN that matches the title search. If nothing is found, then a new error is thrown.
        if (!openLibReply.ok) {
          throw new Error('something went wrong!');
        }
        
        // Returns any matches in json format
        const { docs } = await openLibReply.json();
        
        //create an object to return the isbn for the book search returned as an array
        const bookSearch = docs.map((doc) => ({
         isbn: doc.isbn
        }));

        // returns top 3 ISBN values from Open Library search
        const results = [0, 1, 2];
        setSearchedBooks(results);

    //search Google Books with the 3 returned ISBN values
      const searchGoogleBooks = fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`
      );
      const response = await searchGoogleBooks(bookSearch[0, 1, 2]);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const bookData = items.map((book) => ({
        bookId: book.id,
        image: book.volumeInfo.imageLinks?.thumbnail || '',
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors || ['No author to display'],
        retailPrice: book.saleInfo.retailPrice.amount,
        description: book.volumeInfo.description,
      }));
      console.log(bookData);

      setSearchedBooks(bookData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  //where our components get inserted jsx
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" flexDirection="column">
      <Box>
        {SearchBar}
      </Box>
      {searchedBooks.length > 0 && (
        <Box mt={4}>
          <Text fontweight="bold">Top 3 Search Results:</Text>
          {searchedBooks.map((results, index) => (
            <Text key={index} mt={2}>{searchedBooks}</Text>
          ))}
        </Box>
      )}
    </Flex>
  );
};

export default SearchBooks;
