import React, { useState, useEffect } from 'react';
//change to Chakra
import {
  Container,
  Col,
  Form,
  Button,
  Card,
  Row
} from 'react-bootstrap';

import Auth from '../utils/auth';
import { saveBook, searchGoogleBooks } from '../utils/API';
import { saveBookIds, getSavedBookIds } from '../utils/localStorage';

// do the search in the OpenLibrary to return the ISBN which is the searchInput data inserted below https://openlibrary.org/search.json?q=*
//this is the component SearchBooks
const SearchBooks = () => {
  // create state for holding returned google api data
  const [searchedBooks, setSearchedBooks] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved bookId values
  const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds());

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
        //openLibrary API
        const openLibReply = await searchOpenLib(searchInput);

        if (!openLibReply.ok) {
          throw new Error('something went wrong!');
        }
        
        const { docs } = await openLibReply.json();
        
        //create an object to return the isbn for the book search returned as an array
        const bookSearch = docs.map((doc) => ({
         isbn: doc.isbn
        }));
        console.log(bookSearch[0]);  

    //search google books with the isbn return
      const response = await searchGoogleBooks(bookSearch[0]);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const bookData = items.map((book) => ({
        //need to return up to 10 kinds to get multiple book titles, a single ISBN will pull back multiple books - filter duplicate title and author
        bookId: book.id,
        authors: book.volumeInfo.authors || ['No author to display'],
        title: book.volumeInfo.title,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks?.thumbnail || '',
        retailPrice: book.saleInfo.retailPrice.amount,
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
    <></>)};

export default SearchBooks;
