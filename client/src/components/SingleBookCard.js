import React from 'react';
import FeaturedBookCards from './FeaturedBookCards';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, ButtonGroup, Button, Image, Stack, Heading, Text, Divider } from '@chakra-ui/react';
import data from './FeaturedBookCards';

export default function SingleBookCard() {
  <>
    {data.map((card, index) => (
      <Card key={index} maxW='sm'>  <CardBody>
        <Image
          src={card.imageSrc}
          alt='Book Cover'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{card.title}</Heading>
          <Text>
            {card.description}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            {card.price}
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
      </Card>
    ))}
  </>
}