import React, { useState } from 'react';
import styled from 'styled-components';

import { Button } from "@chakra-ui/react";

const FormStyle = styled.form`
  background-color: var(--ecruPrincess);
  padding-top: 2rem;
  width: 100%;
  font-family: 'Roboto Slab';
  .form-group {
    width: 100%;
  }
  label {
    font-size: 1.5rem;
  }
  input,
  textarea {
    width: 80%;
    font-size: 1.5rem;
    padding: 1rem;
    color: var(--licorice);
    background-color: var(--ivoryGoddess);
    border-radius: 8px;
    margin: 1rem;
    outline: none;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  Button {
    font-size: 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    padding: 2rem 4rem;
    margin-bottom: 2rem;
  }
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <>
      <FormStyle>
        <div className="form-group">
          <label htmlFor="name">
            Name
            <br></br>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email
            <br></br>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Message
            <br></br>
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <Button
          loadingText="Submitting"
          size="lg"
          bg={'oliveCoat.900'}
          color={'ivoryGoddess.900'}
          _hover={{
          bg: 'mossyRock.900',
          }}
          >
          Submit
        </Button>
      </FormStyle>
    </>
  );
}

// need to add type="submit" to button component and then a display for when the message is sent, which should then refresh the page after a few seconds