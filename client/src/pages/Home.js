import React from 'react';
import HomeDetails from '../components/HomeDetails';
import SingleBookCard from '../components/SingleBookCard';
//import { useQuery } from '@apollo/client';

// background color: var(--ecruPrincess) -- do we like this as a general background color?

const Home = () => {
  return (
    <div>
      {/* Displays the HomeDetails component */}
      <HomeDetails />
      <SingleBookCard />
      {/* Displays the Featured Books Card Grid */}
    </div>
  )
};

export default Home;