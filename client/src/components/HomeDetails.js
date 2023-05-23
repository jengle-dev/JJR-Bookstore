import * as React from 'react';

import { Flex, Image, Text, Box, HStack, Circle, IconButton, Container } from '@chakra-ui/react';

export default function HomeDetails() {
    return (
        <Flex as="section" className='home-details' >
        <Container maxW="container.xl">
        <Box boxSize='lg'>
  <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
</Box>
        </Container>
        </Flex>
    )
}