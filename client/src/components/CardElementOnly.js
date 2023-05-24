import React from 'react';
import { Card as ChakraCard, CardBody, CardFooter, ButtonGroup, Button, Image, Stack, Heading, Text, Divider } from '@chakra-ui/react';
import data from './FeaturedBookCards';


export default function CardElementOnly() {
    return (
        <>
         {data.featuredBooks.forEach((book, index) => (
<ChakraCard key={index} maxW='lg'>
    <CardBody>
        <Image boxSize="100px"
            src="./images/featuredBooks/1984.jpg"
            alt='Book cover'
            borderRadius='lg'
            bg='ivoryGoddess.900'
        />
        <Stack mt='6' spacing='3'>
            <Heading className='h4'>1984</Heading>
            <Heading className='h5'>George Orwell</Heading>
            <Text>
            "Thematically, Nineteen Eighty-Four centres on the consequences of totalitarianism, mass surveillance, and repressive regimentation of persons and behaviours within society."
            </Text>
            <Text color='blue.600' fontSize='2xl'>
                $9.99
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
</ChakraCard>
         ))}
</>
)}