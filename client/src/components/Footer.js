import * as React from 'react';
import gitHub from '../assets/logos/Brown-Circle-Book-Icon-Mossy.png';
import insta from '../assets/logos/Brown-Circle-Book-Icon-Toad.png';
import { ChakraProvider } from '@chakra-ui/react';

const Footer = () => {
  return (
    <ChakraProvider>
    <div>
    <div background="">Footer</div>
    <img src={gitHub} alt='GitHub' />
    <img src={insta} alt='Instagram' />
    </div>
  </ChakraProvider>
  )
}

export default Footer;