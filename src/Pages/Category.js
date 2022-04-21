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
const TitleWrap=styled.div`
    background-color: #eee;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2%;
    margin-bottom: 50px;
` 
const Img=styled.img`
  width:250px;
` 
const Title=styled.h1`
    text-align: center;
    line-height: 50px;
    font-weight: 800;
    text-transform: uppercase;
    color: #6D6A63;
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
      // console.log(json);
      setIngredients(json.drinks);
    };
  return (
    <div>
            <TitleWrap>
            <Img src={`https://www.thecocktaildb.com/images/ingredients/${ingredientName}.png`} alt="" />       
            <Title>Drinks & Cocktails with <br /> {ingredientName}</Title>  
            </TitleWrap> 
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