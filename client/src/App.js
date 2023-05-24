import * as React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //used to route navMenu components
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Search from './pages/SearchBook';
import About from './pages/About';
// import NavMenu from './components/NavMenu';
import Footer from './components/Footer.tsx';
import Navbar from './components/NavBar.tsx';

// Extend the theme to include custom colors, fonts, etc
// colorname.900
const colors = {
  ivoryGoddess: {
    900: "#F5EBE0"
  },
  ecruPrincess: {
    900: "#E3D5CA"
  },
  taupeToad: {
    900: "#D5BDAF"
  },
  mossyRock: { 
    900: "#79836A"
  },
  oliveCoat: { 
    900: "#586445"
  },
  muddyRiver: { 
    900: "#4E443A"
  },
  licorice: { 
    900: "#221508" 
  },
};

const theme = extendTheme({ colors })

// Home will include the following components...
// Navigation/Header
// Carousel/Footer

// Import Search results page
// Import Shopping Cart page

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <ChakraProvider theme={theme}>
          <div className="App">
            <Navbar />
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
          <Footer className='footer' />
        </ChakraProvider>
      </ApolloProvider>
    </Router>
  );
}

export default App;
