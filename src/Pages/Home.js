import React from 'react';
import Category from '../components/Category';
import CocktailList from '../components/CocktailList';
import SearchBanner from '../components/SearchBanner';

const Home = () => {
  return (
    <>
     <SearchBanner/>
     <CocktailList/>
     <Category/>
    </>
  )
}

export default Home;