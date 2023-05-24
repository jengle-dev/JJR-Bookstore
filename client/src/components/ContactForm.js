import React, { useState } from 'react';
import styled from 'styled-components';

const FormStyle = styled.form`
  width: 100%;
  font-family: 
  .form-group {
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.5rem;
  }
  input,
  textarea {
    width: 95%;
    font-size: 1.5rem;
    padding: 1rem;
    color: var(--licorice);
    background-color: var(--ivoryGoddess);
    border-radius: 8px;
    margin: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--mossyRock);
    color: var(--licorice);
    font-size: 1.5rem;
    display: inline-block;
    margin-bottom: 4rem;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
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
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" action="mailto:teamjjrbooks@gmail.com">Send</button>
      </FormStyle>
    </>
  );
}