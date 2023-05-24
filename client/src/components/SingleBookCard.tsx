import React from 'react';
import reactRouterDom from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Card as ChakraCard, CardBody, CardFooter, ButtonGroup, Button, Image, Stack, Heading, Text, Divider } from '@chakra-ui/react';
import data from './FeaturedBookCards';

export default function SingleBookCard() {
  return (
  <>
   {data.featuredBooks.forEach((book, index) => (
    <ChakraCard key={index} maxW='lg'>
      <CardBody>
        <Image boxSize="100px"
          src={book.ImageURL}
          alt='Book cover'
          borderRadius='lg'
          bg='ivoryGoddess.900'
        />
        <Stack mt='6' spacing='3'>
            <Heading className='h4'>{book.Name}</Heading>
            <Heading className='h5'>{book.Author}</Heading>
            <Text>
              {book.Description}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              {book.Price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' bg='mossyRock.900'>
              Add to Favorites
            </Button>
            <Button variant='ghost' bg='oliveCoat.900'>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
        
          {/* Log book details */}
          {/* {console.log("ID: ", book.id)}
          {console.log("ImageURL: ", book.imageURL)}
          {console.log("Name: ", book.name)}
          {console.log("Author: ", book.author)}
          {console.log("Price: ", book.price)}
          {console.log("ISBN: ", book.isbn)}
          {console.log("------------------------------------")} */}
          
          </ChakraCard>
              )
    )
    }
  </>
  )
};

// const data = {
//   isNew: true,
//   featuredBooks: [
//     // Book Objects
//   ]
// };
// // Iterate over each book in the featuredBooks array

