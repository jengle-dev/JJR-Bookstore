import * as React from "react";
import openBookPic from '../images/photos/olga-tutunaru-JMATuFkXeHU-unsplash.jpg';
import {
  Card as ChakraCard,
  Flex,
  Image,
  Text,
  Stack,
  HStack,
  Container,
  Box,
  Divider,
  SimpleGrid
} from "@chakra-ui/react";
import CardElementOnly from "./CardElementOnly";
import FeaturedBooks from "./Books";
import SingleBookCard from "./SingleBookCard.tsx";


export default function HomeDetails() {
  return (
    <div border="solid">
      <Box bg={"mossyRock.900"} w="100%" p={4} color={"ivoryGoddess.900"} h="8px"></Box>
      <Flex as="section" className="home-details" bg={"ecruPrincess.900"}>
        <Container maxW="container.xl" marginTop='25px'>
          <HStack>
            {/* image of book on main page */}
            <Box>
            <Image
              mt='15px'
              mb='15px'
              boxSize={{ base: "185px", md: "225px", lg: "310px" }}
              // boxSize={{ base: "50%", md: "75%", lg: "100%" }}
              objectFit="cover"
              src={openBookPic}
              alt="open book - Olga Tutunara"
              boxShadow='xl'
              rounded='md'
            />
            </Box>
            <Box>
            <Text mt="30px" p="15px" align="center" flex="wrap">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
            </Box>
          </HStack>
        </Container>
      </Flex>

      <Divider color='mossyRock.900' border='solid' />
      
      <Flex as="section" className="featured" bg={"ecruPrincess.900"}>
        <Stack direction="row">
          <Text mt="30px" p="30px" align="center" fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
            <h2 className="landing" align="center"> Peep your eyes at these Featured Books! </h2>
          </Text>

        </Stack>
      </Flex>
      {/* <FeaturedBooks /> */}
      <Flex >
      <SingleBookCard />
      </Flex>

    </div>
  );
}
