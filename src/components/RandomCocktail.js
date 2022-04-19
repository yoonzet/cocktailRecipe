import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, {keyframes} from "styled-components";
import {motion} from 'framer-motion';

// ----------------------style-----------------------
const Div = styled.div`
  margin-top: 80px;
`
const H1 = styled.h1`
 text-align: center;
 color: #6D6A63;
 font-size: 20px;
 line-height: 100px;
`
const iconMotion = keyframes`
  0%,100% {
      transform: translateX(0%);
      transform-origin: 50% 50%;
  }
  15% {
    transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    transform: translateX(15px) rotate(6deg);
  }
  45% {
    transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    transform: translateX(-6px) rotate(-1.2deg);
  }
`
const iconOut = keyframes`
0% {
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotateY(-70deg);
            transform: rotateY(-70deg);
    opacity: 0;
  }
`
const RandomBox = styled.div`  
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  &.active{
    animation: ${iconOut}cubic-bezier(0.550, 0.085, 0.680, 0.530) both;;
  }
`
const P = styled.p`
  font-size: 100px;
  text-align: center;
  line-height: 100px;
  animation: ${iconMotion} 2s 1s infinite;  
`
const Click = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  line-height: 100px;
  color: #777;
`
const ClickBefore = styled.div`
  background-color: #eee;
  width: 500px;
  height: 300px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  &.active{
    animation: ${iconOut} 0.5s ease-in both;
  }  
`

const Img = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: #ddd;
  
`

const RandomWrap = styled.div`
  opacity: 0;
  transition: 1s;
  transform: scale(0);
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;

    &.active{
      opacity: 1;
      transform: scale(100%);
      transition-delay: 1s;
    }
`
const ToLink = styled(Link)`
  all: unset;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 40px;

`
const H2 = styled.h2`
  text-align: center;  
  color:#6D6A63;
  margin: 20px;
  white-space: nowrap;
`
const GotoRecipe = styled.p`
  background-color: #eee;
  border-radius: 20px;
  padding: 5px 20px;
  color:#555;
  &:hover{
    background-color: #eee8;
  }
`




// ----------------------component-----------------------

const RandomCocktail = () => {
  const [random, setRandom] = useState([]);
  const [show, setShow] = useState(false);
  const onClick = () => setShow(!false);

  
  useEffect(()=>{
    fetchPopular();
  },[]);

  const fetchPopular = async () =>{
    const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=h')
    const cocktails = await data.json();
    const randomAry = [Math.floor(Math.random() * cocktails.drinks.length)]
    setRandom(cocktails.drinks[randomAry]);
    console.log(randomAry)
  };  

  return (
    
    <Div>
        <RandomBox onClick={onClick}>
        <ClickBefore className={show ? 'active' : ''}>
          <H1>어떤 칵테일을 고를지 고민중이신가요?</H1> 
            <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}>
              <P>🍹</P> 
              <Click>Click!</Click>
            </motion.div>
          </ClickBefore>

        <RandomWrap className={show ? 'active' : ''}>
          <Img src={random.strDrinkThumb} alt="" />
          <ToLink to={`/detail/${random.idDrink}`}>
          <H2>{random.strDrink}</H2>
          <GotoRecipe>레시피 보러가기</GotoRecipe>
          </ToLink>
        </RandomWrap>
        
        </RandomBox>
        
    </Div>
  )
}

export default RandomCocktail;
