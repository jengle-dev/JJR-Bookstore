// This component will connect with the SearchBook functionality/API calls
import { useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@chakra-ui/react';


import '../index.css';

const SearchBarStyle = styled.div`
.input-wrapper {
    background-color: var(--ivoryGoddess);
    width: 100%;
    border-radius: 10px;
    height: 2.5rem;
    padding: 0 15px;
    box-shadow: 0px 0px 8px var(--ecruPrincess);
    display: flex;
    align-items: center;
}

input {
    background-color: transparent;
    border: none;
    height: 100%;
    font-size: 1.25rem;
    width: 100%;
    margin-left: 8px;
}

input: focus {
    outline: none;
}`;

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users") //JSON placeholder - fills autocomplete with various names - eventually we can come back and change this to return book names from API
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((user) => {
                return (
                    value &&
                    user &&
                    user.name &&
                    user.name.toLowerCase().includes(value)
                );
            });
            setResults(results);
        });
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <SearchBarStyle>
            <div className ="input-wrapper">
                <IconButton colorScheme='oliveCoat' aria-label='Search database' icon={<IconButton />} />
                <input placeholder="Type to search..." value={input} onChange={(e) => handleChange(e.target.value)} />
            </div>
        </SearchBarStyle>
    );
};
