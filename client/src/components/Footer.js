import * as React from 'react';
import brownMossy from '../images/Brown-Circle-Book-Icon-Mossy.png';
import brownToad from '../images/Brown-Circle-Book-Icon-Toad.png';
import greenMossy from '../images/Green-Circle-Book-Icon-Mossy.png';
import greenToad from '../images/Green-Circle-Book-Icon-Toad.png';
import { Flex, Container, Heading, Text, Box, HStack, Button, Circle, IconButton } from '@chakra-ui/react';
// Getting an error when importing these pngs that they aren't supported if they fall outside the src directory




// export default Footer;
export default function Footer() {
  // const [showFooter, setFooter] = useState(false);
  return (
    <Flex as="footer" className='footer' >
      <HStack spacing="24px" align="center" />
      <Flex gap="10px" wrap="wrap" justify="center">
        <Box as="div">
          <IconButton aria-label='contact-us' icon={<Circle />}/><Text textColor="#E3D5CA">Contact Us</Text>
        </Box>
        <Box as="div">
          <IconButton aria-label='about-us' icon={<Circle />}/><Text textColor="#E3D5CA">About Us</Text>
        </Box>
        <Box as="div">
          <IconButton aria-label='about-us' icon={<Circle />}/><Text textColor="#E3D5CA">Address</Text>
        </Box>
      </Flex>
   </Flex>
  )
}