import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //used to route navMenu components
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
// Home will include the following components...
// Navigation/Header - JW
// Carousel/Footer - JE

// Import Search results page - JW
// Import Login page
// Import About Us page
// Import Contact page 
// Import Shopping Cart page - JE

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
            <Header />
              <Switch>
                {/* the components and routes to different pages */}
                <Route
                  path="/"
                  element={<Home />}
                  />
              </Switch>
            <Footer />
          </div>
        </ChakraProvider>
      </ApolloProvider>
    </Router>
  );
}

export default App;
