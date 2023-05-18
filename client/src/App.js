import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    {/* not sure if apollo needs to wrap around Chakra */}
    <ChakraProvider>
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
