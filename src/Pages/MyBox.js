import { motion, AnimatePresence } from 'framer-motion';
import React from 'react'
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { likeState, loginState } from '../atoms';
import Cocktails from '../components/Cocktails';


const Div=styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2.5rem;
  padding: 40px 15%;
` 
const BeforeLogin=styled.h2`
  text-align: center;
  margin: 20% 0;
  white-space: nowrap;
` 
function MyBox() {
  const likeItem = useRecoilValue(likeState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

  return (
    <div>
      {/* {isLoggedIn ?
      <> */}
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
      {/* </> :
      <BeforeLogin>로그인 후 이용해주세요</BeforeLogin>
      }  */}
    </div>
  )
}

export default MyBox;