import * as React from "react";

import {
  Flex,
  Image,
  Text,
  Box,
  Stack,
  HStack,
  Circle,
  IconButton,
  Container,
} from "@chakra-ui/react";
import photo from '../images/photos/olga-tutunaru-JMATuFkXeHU-unsplash.jpg';

export default function HomeDetails() {
  return (
    <div>
      <Box h="112px" bg={"ecruPrincess.900"}></Box>
      <Flex as="section" className="home-details" bg={"ecruPrincess.900"}>
        <Container maxW="container.xl">
          <Stack direction="row">
            <Image
              p='10px'
              boxSize="300px"
              objectFit="cover"
              src={photo}
              alt="open book - Olga Tutunara"
            />
            <Text m='20px'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </Stack>
        </Container>
      </Flex>
    </div>
  );
}
