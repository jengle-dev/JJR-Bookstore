import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import { Box, Button, Heading, Input } from "@chakra-ui/react";
import styled from 'styled-components';

import Auth from '../utils/auth';

const LoginStyles = styled.div`
background-color: var(--ecruPrincess);
padding-bottom: 12rem;
Input {
  width: 40%;
  background-color: var(--ivoryGoddess);
  color: var(--licorice);
  margin: 1rem;
  margin-left: 10rem;
  margin-right: 10rem;
}
Button {
  margin-top: 1rem;
}
`;

export default function Login(props) {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <LoginStyles>
        <Box padding = {4}>
          <Box className="card" padding = {4}>
            <Heading as="h4" size="xl" padding = {4}>
              Login
            </Heading>
            <Box className="card-body">
              {data ? (
                <p>
                  Success! You may now head{" "}
                  <Link to="/">back to the homepage.</Link>
                </p>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <Input
                    className="form-input"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <Input
                    className="form-input"
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <br />
                  <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg='oliveCoat.900'
                  color='ivoryGoddess.900'
                  _hover={{
                    bg: 'mossyRock.900',
                  }}>
                  Submit
                  </Button>
                </form>
              )}
  
              {error && (
                <Box>
                  {error.message}
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </LoginStyles>
    );
};