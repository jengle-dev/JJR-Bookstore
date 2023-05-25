import React from 'react';
// import { SearchBookAPI } from '../components/SearchBookAPI';
import { SearchBar } from '../components/SearchBar';
import { Flex, Box } from '@chakra-ui/react';

const SearchBook = () => {
  return (
    <>
    <Box bg='taupeToad.900'>
    <Flex p='25px' justify='center' bg='taupeToad.900'>
    <SearchBar />
    </Flex>
    </Box>
    </>
  )
}

export default SearchBook;