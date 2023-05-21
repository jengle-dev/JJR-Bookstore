import * as React from 'react';
<<<<<<< HEAD
import gitHub from '../assets/logos/Brown-Circle-Book-Icon-Mossy.png';
import insta from '../assets/logos/Brown-Circle-Book-Icon-Toad.png';
import { ChakraProvider } from '@chakra-ui/react';
=======
import brownMossy from '../images/Brown-Circle-Book-Icon-Mossy.png'
import brownToad from '../images/Brown-Circle-Book-Icon-Toad.png';
import greenMossy from '../images/Green-Circle-Book-Icon-Mossy.png'
import greenToad from '../images/Green-Circle-Book-Icon-Toad.png'

// Getting an error when importing these pngs that they aren't supported if they fall outside the src directory
>>>>>>> 9cb780e1237aa58c8eb0969dddfba8775c2e19be

const Footer = () => {
  return (
    <ChakraProvider>
    <div>
<<<<<<< HEAD
    <div background="">Footer</div>
    <img src={gitHub} alt='GitHub' />
    <img src={insta} alt='Instagram' />
=======
      <img src={brownMossy}/>
      <img src={brownToad}/>
      <img src={greenMossy}/>
      <img src={greenToad}/>
>>>>>>> 9cb780e1237aa58c8eb0969dddfba8775c2e19be
    </div>
  </ChakraProvider>
  )
}

export default Footer;