import React from 'react'
import {motion} from 'framer-motion'; //애니메이션 라이브러리
import{Link}from "react-router-dom";
import styled from "styled-components";

const Div = styled.div `
  /* max-width: 300px; */
`
const Img = styled.img `
  width: 100%;
  border-radius: 10px;
`

const P = styled.p `
  font-weight: 700;
  margin-top: 1vw;
  text-align: center;
`

function Cocktails({cocktail, idDrink}) {
  return (
    <motion.div 
      layout
      animate={{ opacity: 1}}
      initial={{opacity:0,}}
      exit={{opacity:0,}}
      >
        <Div> 
          <Link to={`/detail/${idDrink}`}>
          <Img src={cocktail.strDrinkThumb} alt="" />
           <P>{cocktail.strDrink}</P>    
            </Link>
        </Div>
    </motion.div>
  );
}

export default Cocktails;