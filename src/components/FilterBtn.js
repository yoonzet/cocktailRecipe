import React, { useEffect } from 'react'
import styled from "styled-components";


const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

const Button = styled.button`
  all: unset;
  margin: 0.5rem;
  min-width: 5rem;
  border-radius: 1rem;
  padding: 0.5rem;
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
        const filtered = popular.filter((cocktail)=>cocktail.strAlcoholic.includes(activeIngredient)
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
        className={activeIngredient === 'Alcoholic' ? 'active' : ''} 
        onClick={()=> setActiveIngredient("Alcoholic")}
        >Alcoholic</Button>

        <Button 
        className={activeIngredient === 'Non alcoholic' ? 'active' : ''} 
        onClick={()=> setActiveIngredient('Non alcoholic')}
        >Non alcoholic</Button>        
        
    </Div>
  )
}

export default FilterBtn;