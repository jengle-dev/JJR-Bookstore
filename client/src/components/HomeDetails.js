import * as React from "react";
// import { useState } from 'react';
// import SingleBookCard from './SingleBookCard';
import FeaturedBookCards from './FeaturedBookCards';
import openBookPic from '../images/photos/olga-tutunaru-JMATuFkXeHU-unsplash.jpg';
import {
  Flex,
  Image,
  Text,
  Stack,
  Container,
  Box,
  Divider
} from "@chakra-ui/react";


export default function HomeDetails() {
  return (
    <div>
      <Box bg={"mossyRock.900"} w="100%" p={4} color={"ivoryGoddess.900"} h="8px"></Box>
      <Flex as="section" className="home-details" bg={"ecruPrincess.900"}>
        <Container maxW="container.xl" marginTop='25px'>
          <Stack direction="row">

            <Image
              mt='15px'
              mb='50px'
              boxSize="300px"
              objectFit="cover"
              src={openBookPic}
              alt="open book - Olga Tutunara"
              boxShadow='xl'
              rounded='md'
              flexGrow={3}
              flexShrink={-3}
            />
            <Text mt="30px" p="30px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </Stack>
        </Container>
      </Flex>
      <Divider color='mossyRock.900' border='solid' />
      <Flex as="section" className="home-details" bg={"ecruPrincess.900"}>
        <Stack direction="row">
        <Text mt="30px" p="30px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
            </Stack>

            </Flex>
<FeaturedBookCards/>
    </div>
  );
}
