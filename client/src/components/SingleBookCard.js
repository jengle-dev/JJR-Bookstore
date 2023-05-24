import React from 'react';
// import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, ButtonGroup, Button, Image, Stack, Heading, Text, Divider } from '@chakra-ui/react';
import data from './FeaturedBookCards';

export default function SingleBookCard() {
  <>
    {data.featuredBooks.forEach((book, index) => (
      <Card key={index} maxW='sm'>
        <CardBody>
          <Image
            src={book.imageSrc}
            alt='Book cover'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading className='h4'>{book.name}</Heading>
            <Heading className='h5'>{book.author}</Heading>
            <Text>
              {book.description}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              {book.price}
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
          {console.log("ID: ", book.id)}
          {console.log("ImageURL: ", book.imageURL)}
          {console.log("Name: ", book.name)}
          {console.log("Author: ", book.author)}
          {console.log("Price: ", book.price)}
          {console.log("ISBN: ", book.isbn)}
          {console.log("------------------------------------")}
      </Card>
    ))}
  </>
};

// const data = {
//   isNew: true,
//   featuredBooks: [
//     // Book Objects
//   ]
// };
// // Iterate over each book in the featuredBooks array

