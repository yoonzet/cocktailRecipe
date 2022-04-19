import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import RandomCocktail from '../components/RandomCocktail'


const Div=styled.div`
  margin-bottom: 10%;
` 
const IgdWrap = styled.div`
  border-top: 1px solid #eee;
  margin-top: 80px;
`
const H2 = styled.h2`
  text-align: center;
  margin-top: 80px;
  color: #6D6A63;
`
const Ingredient = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 3rem;
  padding: 40px 15%;

`
const GoLink = styled(Link)`
  all: unset;

`
const Img = styled.img`
  width: 100%;
  border-radius: 20px;
`
const P = styled.p`
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
`


function Explore() {
  const popularAry = ['Vodka','Gin', 'Rum', 'Tequila', 'Kahlua'];

  const [ingredients, setIngredients] = useState([]);
  
    useEffect(() => {
      getCocktail();
    }, []);
  
    const getCocktail = async () => {
      const json = await (
        await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
      ).json();
      setIngredients(json.drinks.slice(0,10));
    };


  return (
    <Div>
      <RandomCocktail/>

      <IgdWrap>
          <H2>Popular Ingredients</H2>
          <Ingredient>
          {popularAry.map((item)=> {
            return(
                <GoLink to={`/category/${item}`}>
              <Img src={`https://www.thecocktaildb.com/images/ingredients/${item}.png`} alt="" />
              <P>{item}</P>          
              </GoLink>
            )
          })}      
          </Ingredient>
      </IgdWrap>

      <IgdWrap>
        <H2>Non Alcoholic</H2>
        <Ingredient>
        {ingredients.map((item)=> {
              return(
                  <GoLink to={`/detail/${item.idDrink}`}>
                <Img src={`${item.strDrinkThumb}`} alt="" />
                <P>{item.strDrink}</P>          
                </GoLink>
              )
            })}      
            </Ingredient>
      </IgdWrap>

    </Div>
  )
}

export default Explore