import React, { useEffect } from 'react'
import styled from "styled-components";


const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

const Button = styled.button`
  all: unset;
  margin-right: 1rem;
  min-width: 5rem;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  background-color:#C4C4C4 ;
  color: #fff;
  text-align: center;
  font-weight: bold;
  cursor: pointer;

  &.active{
    background-color: #AEA69B;
    color: white;
  }
`

function FilterBtn({setActiveIngredient, activeIngredient, setFiltered, popular}) {   
    useEffect(()=>{
        if(activeIngredient === 0){
            setFiltered(popular);
            return;
        }
        const filtered = popular.filter((cocktail)=>cocktail.strIngredient1.includes(activeIngredient)
        );
        setFiltered(filtered);
    },[activeIngredient]);
  return (
    <Div>
        <Button 
        className={activeIngredient === 0 ? 'active' : ''} 
        onClick={()=> setActiveIngredient(0)}
        >Popular</Button>

        <Button 
        className={activeIngredient === 'Vodka' ? 'active' : ''} 
        onClick={()=> setActiveIngredient("Vodka")}
        >Vodka</Button>

        <Button 
        className={activeIngredient === 'Gin' ? 'active' : ''} 
        onClick={()=> setActiveIngredient('Gin')}
        >Gin</Button>        
        
        <Button 
        className={activeIngredient === 'rum' ? 'active' : ''} 
        onClick={()=> setActiveIngredient('rum')}
        >rum</Button>        
    </Div>
  )
}

export default FilterBtn;