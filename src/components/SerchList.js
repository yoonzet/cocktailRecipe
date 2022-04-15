import React from "react";
import { useGlobalContext } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Div = styled.div `
  margin: 50px 30%; 
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

  const Error = styled.h2`
    text-align: center;
    margin: 50px;
  `

const SearchList = () => {
  const { cocktailSearch} = useGlobalContext();

  if(cocktailSearch === null){
    return <Error>검색결과가 없습니다.</Error>;
  }
  // if (loading) {
  //   return "Loading";
  // };
  
  return (
    <Div>
      <Error/>
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
