import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const H1 = styled.h1`

`
const RandomBox = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: #ddd;
`

const Explore = () => {
  const [popular, setPopular] = useState([]);  

  useEffect(()=>{
    fetchPopular();
  },[]);

  const fetchPopular = async () =>{
    const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m')
    const cocktails = await data.json();
    setPopular(cocktails.drinks);
  };  
  const test = setTimeout(()=>{

    const randomArry = [Math.floor(Math.random() * popular.length)]
    const randomCocktail=popular[randomArry]
    // console.log(randomCocktail.idDrink)
  
  },1000)

  console.log(test)
  
  return (
    <div>
        <H1>랜덤 칵테일</H1> 
        <RandomBox>CLICK</RandomBox>
        {/* <img src={randomCocktail.strDrinkThumb} alt="" /> */}
        <h1>{test.idDrink}</h1>
        {/* {popular.map((cocktail, index)=>{          
        return(
            <Link 
            style={{
              textDecoration: 'none', 
              color: '#444'}} 
              to={`/detail/${cocktail.idDrink}`}
              key={index}>
                <img src={cocktail.strDrinkThumb} alt="" />
                {cocktail.strDrink}
                </Link>                
            )                              
          })}  */}
    </div>
  )
}

export default Explore;