import { AnimatePresence } from 'framer-motion';
import {motion} from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Cocktails from '../components/Cocktails';


const Div=styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2.5rem;
  padding: 40px 15%;
` 


function Category() {
    const { ingredientName } = useParams();
    const [ingredients, setIngredients] = useState([]);
  
    useEffect(() => {
      getCocktail();
    }, []);
  
    const getCocktail = async () => {
      const json = await (
        await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientName}`)
      ).json();
      console.log(json);
      setIngredients(json.drinks);
    };
  return (
    <div>
         <motion.div layout>
        <AnimatePresence>
        <Div>           
        {ingredients.map((item)=>{
          return <Cocktails 
          key={item.idDrink} 
          cocktail={item}
          idDrink={item.idDrink}
          />          
        })}          
        
        </Div>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default Category;