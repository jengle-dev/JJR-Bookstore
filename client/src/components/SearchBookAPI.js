import React, { useState, useEffect } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { SearchBar } from './SearchBar';
import '../index.css';

// Component below searches in the OpenLibrary to return the ISBN which is the searchInput data inserted below https://openlibrary.org/search.json?q=*
export const SearchBooks = () => {
    // create state for holding returned open library api data / ISBN
    const [searchedBooks, setSearchedBooks] = useState([]);
    // create state for holding our search field data
    const [searchInput, setSearchInput] = useState('');
    // create state to hold saved bookId values
    const [savedBookIds, setSavedBookIds] = useState('');
  
    useEffect(() => {
      const cleanup = () => {
        localStorage.setItem('savedBookIds', JSON.stringify(savedBookIds));
      };
    
      // Run the cleanup function when the component unmounts
      return cleanup;
    }, [savedBookIds]);
    
    // create method to search for books and set state on form submit
    const handleFormSubmit = (searchInput) => {
      
      // If the user does not input a search title, then return nothing.
      if (!searchInput) {
        return false;
      }
      
      let bookSearch;
      
      // Open Library API call - retrieves ISBN number based on user input
      const openLibReply =  fetch(
        `https://openlibrary.org/search.json?q=${searchInput}`).then((response) => { 
          // Returns any matches (response) in json format
          return response.json()
        }).then(data => {
          //Create an object to return the isbn for the book search returned as an array.
          bookSearch = data.docs.map((doc) => ({
            isbn: doc.isbn,
            title: doc.title,
            author: doc.author_name,
            preview: doc.first_sentence
          }))
        })
  
        console.log(bookSearch);
  
        setSearchedBooks([bookSearch[0][0], bookSearch[0][1], bookSearch[0][2]]);
  
        return (
          <Flex height="100vh" alignItems="center" justifyContent="center" flexDirection="column" bg={"ecruPrincess.900"}>
            <Box>
              <SearchBar searchBooks={handleFormSubmit} />
              {searchedBooks.length > 0 && (
                <Box mt={4}>
                  <Text fontweight="bold">Top 3 Search Results:</Text>
                  {searchedBooks.map((results, index) => (
                    <Text key={index} mt={2}>{searchedBooks}</Text>
                  ))}
                </Box>
              )}
            </Box>
          </Flex>
        );
  }};


// creates a state for holding returned Google Books api data
// const [searchedGoogleBooks, setSearchedGoogleBooks] = useState([]);

// call fetch 3 different times, once for each ISBN available to us in the state variable (searchedBooks). 
// need another state variable that holds the Google books
// once each fetch method completes, store in Google state variable
// const searchGoogleBooks = () => {

  // API call to Google Books
  // const searchGoogleBooks = fetch(
  //   `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`
  // ).then((response) => {return response.json()})
  // .then(data => {
  //   googleBookSearch = data.items.map(items) => {

  //   }
  //   // bookSearch = data.docs.map((doc) => ({

  // })

  // const response = searchedGoogleBooks(bookSearch[0, 1, 2]);

  // if (!response.ok) {
  //   throw new Error('Whoops, something went wrong!');
  // }

  // const { items } = response.json();

  // const bookData = items.map((book) => ({
  //   bookId: book.id,
  //   image: book.volumeInfo.imageLinks?.thumbnail || '',
  //   title: book.volumeInfo.title,
  //   authors: book.volumeInfo.authors || ['No author to display'],
  //   retailPrice: book.saleInfo.retailPrice.amount,
  //   description: book.volumeInfo.description,
  // }));
  // console.log(bookData);
  // // each fetch method will build an object like above (bookData). Each fetch method should have its own.
  // // Once data is received it will be added to the state variable.
  // // Change frontend to reflect Google state variable
  // setGoogleSearchedBooks(bookData[0][0]);
  // setSearchInput('');