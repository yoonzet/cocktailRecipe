import { motion, AnimatePresence } from 'framer-motion';
import React from 'react'
import {  useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { likeState } from '../atoms';
import Cocktails from '../components/Cocktails';


const H3=styled.h3`
  margin-bottom: 20%;
  color: #777;
  /* background-color: #eee; */
  padding: 30%;
  text-align: center;
  line-height: 30px;
  white-space: nowrap;
` 
const Div=styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2.5rem;
  padding: 40px 15%;
` 
function MyBox() {
  const likeItem = useRecoilValue(likeState);
  console.log(likeItem.length)

  return (
    <div> 
      {likeItem.length === 0 ? (
      <H3>찜한 레시피가 없습니다.<br />하트를 눌러 추가해보세요</H3>
      ) : (
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
      )
      }
    </div>
  )
}

export default MyBox;