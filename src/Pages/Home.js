import React from 'react';
import Banner from '../components/Banner';
import CategoryBtn from '../components/CategoryBtn';
import Cocktails from './Cocktails';

const Home = () => {
  return (
    <>
     <Banner/>
     <CategoryBtn />
     <Cocktails/>
    </>
  )
}

export default Home;