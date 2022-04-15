import React from "react";
import Cocktails from "./Cocktails";
import { useGlobalContext } from "../context";
import styled from "styled-components";

const Div=styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2.5rem;
  padding: 40px 15%;
` 

const CocktailList = () => {
  const { cocktailList, loading } = useGlobalContext();
  // console.log(cocktails)
  if (loading) {
    return "Loading";
  };
  if(cocktailList === null){
    return 'hi';
  }
  
  return (
    <Div>
      {/* {cocktailList.map((cocktail)=>{
          return <Cocktails 
          key={cocktail.idDrink} 
          cocktail={cocktail}
          idDrink={cocktail.idDrink}
          />;          
        })}       */}
    </Div>
  );
};

export default CocktailList;
