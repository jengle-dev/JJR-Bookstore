import React, { useState, useEffect } from 'react';
//import Chakra styling
import { Flex, Box, Text } from '@chakra-ui/react';
import { SearchBar } from '../components/SearchBar';
// import { useMutation } from '@apollo/client';


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
  
  // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
  // useEffect(() => {
  //   return () => savedBookIds(savedBookIds);
  // });

  // create method to search for books and set state on form submit
  const handleFormSubmit = (searchInput) => {

    if (!searchInput) {
      return false;
    }
    let bookSearch;
      // Open Library API call
      const openLibReply =  fetch(
        `https://openlibrary.org/search.json?q=${searchInput}`
      ).then((response) => { 
        // Returns any matches in json format
        return response.json();
  }).then(data => {
    //create an object to return the isbn for the book search returned as an array
        bookSearch = data.docs.map((doc) => ({
          isbn: doc.isbn
        }));
        console.log(bookSearch);
      setSearchedBooks([bookSearch[0][0], bookSearch[0][1], bookSearch[0][2]]);
      return true;
});

// call fetch 3 different times, once for each ISBN available to us in the state variable (searchedBooks). 
// need another state variable that holds the Google books
// once each fetch method completes, store in Google state variable
const searchGoogleBooks = () => {
  const searchGoogleBooks = fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`
  );
  const response = searchGoogleBooks(bookSearch[0, 1, 2]);

  if (!response.ok) {
    throw new Error('something went wrong!');
  }

  const { items } = response.json();

  const bookData = items.map((book) => ({
    bookId: book.id,
    image: book.volumeInfo.imageLinks?.thumbnail || '',
    title: book.volumeInfo.title,
    authors: book.volumeInfo.authors || ['No author to display'],
    retailPrice: book.saleInfo.retailPrice.amount,
    description: book.volumeInfo.description,
  }));
  console.log(bookData);
// each fetch method will build an object like above (bookData). Each fetch method should have its own.
// Once data is received it will be added to the state variable.
// Change frontend to reflect Google state variable
  setGoogleSearchedBooks(bookData);
  setSearchInput('');

  }).catch((err) => { console.log(err); });
console.log(bookSearch);
};
}
      //search Google Books with the 3 returned ISBN values
      

  //where our components get inserted jsx
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" flexDirection="column">
      <Box>
        <SearchBar searchBooks={handleFormSubmit} searchGoogleBooks={searchGoogleBooks}/>
        {searchedGoogleBooks.length > 0 && (
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
};

