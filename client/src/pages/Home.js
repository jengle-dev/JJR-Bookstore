import React from 'react';
import HomeDetails from '../components/HomeDetails';
import SingleBookCard from '../components/SingleBookCard';
//import { useQuery } from '@apollo/client';

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