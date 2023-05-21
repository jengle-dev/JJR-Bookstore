import React from 'react';
import Footer from '../components/Footer';
import { ChakraProvider } from '@chakra-ui/react';

const Home = () => {
  return (
    <ChakraProvider>
    <div>
      <div>Home</div>
      <container>
      <p>Show any text at all.</p>
      </container>
      <Footer />
    </div>
    </ChakraProvider>
  )
}

export default Home;