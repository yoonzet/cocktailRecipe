import React from 'react'
import {motion} from 'framer-motion'; //애니메이션 라이브러리
import{Link}from "react-router-dom";
import styled from "styled-components";
import LikeBtn from './LikeBtn';

const Div = styled.div `
  max-width: 300px;
  position: relative;
`
const Img = styled.img `
  width: 100%;
  border-radius: 10px;
  transition: 0.2s;
  &:hover{
    transform: scale(101%);
  }
`
const P = styled.p `
  font-weight: 700;
  margin-top: 10px;
  text-align: center;
`
const BtnWrap = styled.div `
  position: absolute;
  top: 3%;
  right: 5%;
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
          <Link 
            style={{textDecoration: 'none', color: '#444'}} 
            to={`/detail/${idDrink}`}>
              <Img src={cocktail.strDrinkThumb} alt="" />
              <P>{cocktail.strDrink}</P> 
          </Link>
          <BtnWrap>
            <LikeBtn 
            cocktail={cocktail}
            idDrink={cocktail.idDrink}/>
          </BtnWrap>
        </Div>
    </motion.div>
  );
}

export default Cocktails;