import React from "react";
import { useGlobalContext } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Div = styled.div `
  height: 210px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1vh 35vw;
  padding: 10px 0;
  overflow:hidden ;
  opacity: 90%;
  @media screen and (max-width:900px) {
    height: 170px;
    margin: 1vh 5vw; 
  }
`
const P = styled.p `
  max-height: 30px;
  background-color: #eee;
  padding: 5px 30px;
  border-radius: 20px;
  color:black;
  float: left;
  margin: 5px;  
  cursor: pointer;
  &:hover{
    background-color: #ddd;
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
