import React from "react";
import { useGlobalContext } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Div = styled.div `
  margin: 50px 20%; 
`
const P = styled.span `
  background-color: #fff9;
  padding: 5px 20px;
  border-radius: 20px;
  color:black;
  float: left;
  margin: 10px;  
  cursor: pointer;
  &:hover{
    background-color: #fff;
  }
  `
const SearchList = () => {
  const {cocktailSearch} = useGlobalContext();

  if(cocktailSearch === null){
    return '';
  }  
  return (
    <Div>
      {cocktailSearch.map((cocktail)=>{          
        return(
            <P><Link style={{
              textDecoration: 'none', 
              color: '#444'}} 
              to={`/detail/${cocktail.idDrink}`}>
                {cocktail.strDrink}
                </Link></P> 
            )                              
          })} 
    </Div>
  );
};

export default SearchList;
