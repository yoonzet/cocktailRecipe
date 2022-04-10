import React from 'react'
import Banner from '../components/Banner';
import CategoryBtn from '../components/CategoryBtn';
import Cocktails from './Cocktails';


function Category() {
  return (
    <div>
     <Banner/>
     <CategoryBtn />
     <Cocktails to='/category/Alcoholic'/>
    </div>
  )
}

export default Category;