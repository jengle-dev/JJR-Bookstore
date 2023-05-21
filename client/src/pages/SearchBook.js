import React, { useState, useEffect } from 'react';
//import Chakra styling
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { SAVE_BOOK } from '../utils/mutations';
import { saveBookIds, getSavedBookIds } from '../utils/localStorage';
// import search bar?

// Component below searches in the OpenLibrary to return the ISBN which is the searchInput data inserted below https://openlibrary.org/search.json?q=*
const SearchBooks = () => {
  // create state for holding returned open library api data / ISBN
  const [searchedBooks, setSearchedBooks] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');
  // create state to hold saved bookId values
  const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds());

  const [saveBook] = useMutation(SAVE_BOOK);

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
        console.log(bookSearch[0, 1, 2]);  

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
        //need to return up to 10 kinds to get multiple book titles, a single ISBN will pull back multiple books - filter duplicate title and author
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
  // Copied from project 21 - styled with Bootstrap-React. Switch over to Chakra styling.
  return (
    <>
      <div className="text-light bg-dark p-5">
        <Container>
          <h1>Search for Books!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a book'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>

      <Container>
        <h2 className='pt-5'>
          {searchedBooks.length
            ? `Viewing ${searchedBooks.length} results:`
            : 'Search for a book to begin'}
        </h2>
        <Row>
          {searchedBooks.map((book) => {
            return (
              <Col md="4">
                <Card key={book.bookId} border='dark'>
                  {book.image ? (
                    <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' />
                  ) : null}
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <p className='small'>Authors: {book.authors}</p>
                    <Card.Text>{book.description}</Card.Text>
                    {Auth.loggedIn() && (
                      <Button
                        disabled={savedBookIds?.some((savedBookId) => savedBookId === book.bookId)}
                        className='btn-block btn-info'
                        onClick={() => handleSaveBook(book.bookId)}>
                        {savedBookIds?.some((savedBookId) => savedBookId === book.bookId)
                          ? 'This book has already been saved!'
                          : 'Save this Book!'}
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default SearchBooks;
