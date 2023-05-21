import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //used to route navMenu components
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
//import Search from './pages/SearchBook';
import NavMenu from './components/NavMenu';
//import Footer from './components/Footer';

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
        <ChakraProvider>
          <div className="App">
            <NavMenu />
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                {/* Search? */}
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            {/* Footer */}
          </div>
        </ChakraProvider>
      </ApolloProvider>
    </Router>
  );
}

export default App;
