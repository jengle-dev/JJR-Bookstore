import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //used to route navMenu components

import NavMenu from './components/NavMenu';
import Home from './pages/Home'
// Import Search results page
// Import Login page
// Import About Us page
// Import Contact page

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    {/* not sure if apollo needs to wrap around Chakra */}
    <ChakraProvider>
      // update class div to Chakra header class
      <div className="App">
        <header className="App-header">
         {/* the components and routes to different pages */}
        </header>
      </div>
    </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
