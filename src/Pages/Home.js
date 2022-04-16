import React from 'react';
import CocktailList from '../components/CocktailList';
import SearchBanner from '../components/SearchBanner';

const Home = () => {
  return (
    <>
     <SearchBanner/>
     <CocktailList/>
    </>
  )
}

export default Home;