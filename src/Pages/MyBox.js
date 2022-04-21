import { motion, AnimatePresence } from 'framer-motion';
import React from 'react'
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { likeState } from '../atoms';
import Cocktails from '../components/Cocktails';


const Div=styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2.5rem;
  padding: 40px 15%;
` 
function MyBox() {
  const likeItem = useRecoilValue(likeState);
  return (
    <div>
      <motion.div layout>
        <AnimatePresence>
        <Div>           
        {likeItem.map((cocktail)=>{
          return <Cocktails
          key={cocktail.idDrink} 
          cocktail={cocktail}
          idDrink={cocktail.idDrink}
          />          
        })}          
        </Div>
        </AnimatePresence>
      </motion.div>   
    </div>
  )
}

export default MyBox;