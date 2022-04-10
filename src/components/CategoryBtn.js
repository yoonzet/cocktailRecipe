import React from 'react';
import {
    Link
  } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
    margin:40px 15vw;
    display: flex;
    /* justify-content: space-between; */
`
const BtnLink = styled(Link)`
    all: unset;
    background-color: #C4C4C4;
    border-radius: 20px;
    padding: 10px 2vw;
    margin-right: 15px;
    color: #fff;
    font-size:18px;
    white-space: nowrap;

    &:hover{
        background-color: red;
    }
`


function CategoryBtn({strCategory}) {
    const categories = ['Alcoholic','Non Alcoholic','vodka', 'Gin', 'Tequila', 'Rum', '...' ];
    

  return (
    <Div>
       {categories.map( (category, index) =>(
         <BtnLink to={`/category/${category}`} key={index}>{category}</BtnLink>
       ))}        
    </Div>
  )
}

export default CategoryBtn;