import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Route } from 'react-router-dom'; //used to route navMenu components

import NavMenu from './components/NavMenu';
import Home from './pages/Home';
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
      {/* not sure if apollo needs to wrap around Chakra -- do Chakra and Apollo go in index.js or App.js? */}
        <ChakraProvider>
          <div className="App">
            <Routes>
              {/* the components and routes to different pages */}
              <Route
                path="/"
                element={<Home />}
                />
            </Routes>
          </div>
        </ChakraProvider>
      </ApolloProvider>
    </Router>
  );
}

export default App;
