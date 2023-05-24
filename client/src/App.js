import * as React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //used to route navMenu components
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
// import NavMenu from './components/NavMenu';
import Footer from './components/Footer.tsx';
import Navbar from './components/NavBar.tsx';
// import FeaturedBooks from './components/Books';
// import SingleBookCard from './components/SingleBookCard.tsx';

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
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              {/* <Route path="/search">
                <Search />
              </Route> */}
              <Route path="/">
                <Home />
                {/* <FeaturedBooks /> */}
              {/* <SingleBookCard /> */}
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
