import React from "react";
import {
  Card as ChakraCard,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Flex,
} from "@chakra-ui/react";
import data from "./FeaturedBookCards";

export default function SingleBookCard() {
  return (
    <>
      {data.featuredBooks.map((book, index) => (
        <Flex flexWrap='wrap'>
        <ChakraCard key={index} minW="md" margin='20px'>
          <CardBody>
            <Image
              boxSize="100px"
              src={book.imageURL}
              alt="Book cover"
              borderRadius="lg"
              bg="ivoryGoddess.900"
            />
            <Stack mt="6" spacing="3">
              <Heading className="h4">{book.name}</Heading>
              <Heading className="h5">{book.author}</Heading>
              <Text>{book.description}</Text>
              <Text color="blue.600" fontSize="2xl">
                {book.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" bg="mossyRock.900">
                Add to Favorites
              </Button>
              <Button variant="ghost" bg="oliveCoat.900">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </ChakraCard>
        </Flex>
      ))}
        {/* <!-- Floating Action Button --> */}
    <div className="fixed-action-btn">
        <a className="btn-floating btn-large" href="#">
            <i className="material-symbols-outlined">rocket</i>
        </a>
    </div>
    </>
    
  );
}

// const data = {
//   isNew: true,
//   featuredBooks: [
//     // Book Objects
//   ]
// };
// // Iterate over each book in the featuredBooks array
