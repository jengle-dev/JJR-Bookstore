import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import styled from 'styled-components';


const SignUpStyles = styled.div`
background-color: var(--ecruPrincess);
padding: 4rem;
Input {
  color: var(--licorice);
  background-color: var(--ivoryGoddess);
  margin: 1rem;
}
Button {
  margin-top: 1rem;
}
`;

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SignUpStyles>
    <Box display="flex" justifyContent="center" marginBottom="8">
      <Box backgroundColor="ecruPrincess.900" width="100%" maxWidth="lg">
          <Heading
            as="h4"
            color="oliveCoat.900"
            padding="2"
          >
            Sign Up
          </Heading>
          <Box padding="4">
            {data ? (
              <Text>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </Text>
            ) : (
              <Box as="form" onSubmit={handleFormSubmit}>
                <Input
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                  marginBottom="4"
                />
                <Input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  marginBottom="4"
                />
                <Input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                  marginBottom="4"
                />
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'oliveCoat.900'}
                  color={'ivoryGoddess.900'}
                  _hover={{
                    bg: 'mossyRock.900',
                  }}
                  type="submit">
                  Submit
                  </Button>
              </Box>
            )}

            {error && (
              <Box my="3" p="3" backgroundColor="muddyRiver.900" color="ivoryGoddess.900">
                {error.message}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </SignUpStyles>
  );
};

export default Signup;