import * as React from 'react';
 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //used to route navMenu components
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ChakraProvider } from '@chakra-ui/react';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Contact from './pages/Contact';
//import Search from './pages/SearchBook';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';

// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
   mainColosr: {
    ivoryGoddess: "#F5EBE0",
    ecruPrincess: "#E3D5CA",
    taupeToad: "#D5BDAF",
    mossyRock: "#79836A",
    oliveCoat: "#586445",
    muddyRiver: "#4E443A"
    }
  }
})

// Home will include the following components...
// Navigation/Header
// Carousel/Footer

// Import Search results page
// Import Shopping Cart page

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
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
                <Route path="/login">
                  <Login />
                </Route>
                {/* Search? */}
                <Route path="/">
                  <Home />
                </Route>
                <Footer />
              </Switch>
          </div>
        </ChakraProvider>
      </ApolloProvider>
    </Router>
  );
}

export default App;
