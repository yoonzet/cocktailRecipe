import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { useParams } from "react-router-dom";

//------------------style---------------------

const Div = styled.div `
    margin:0 15vw;
    display: flex;
    justify-content: center;
  `
const Ul = styled.ul `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
  `

const Li = styled.li `
list-style: none;
width: 13vw;
margin: 2vw 0.5vw;
text-align: center;
`

const Img = styled.img `
  width: 100%;
  border-radius: 10px;
`

const P = styled.p `
  font-weight: 700;
  margin-top: 1vw;
`

//-------------------component--------------------

const Cocktails = () => {
  const [cocktails, setCocktails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const listA = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a='

  const strAlcoholic = useParams();
  const categories = ['Alcoholic','Non Alcoholic','vodka', 'Gin', 'Tequila', 'Rum', '...' ];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setCocktails(null);
        setLoading(true);
        const response = await axios.get(
          `${listA}Alcoholic`
        );
        setCocktails(response.data.drinks); 
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!cocktails) return null;
  return (
    
    <Div>
     
      <Ul>
      {cocktails.map(user => (
        <Li key={user.idDrink}>
               <Img src={user.strDrinkThumb} alt="" />
               <P>{user.strDrink}</P>            
        </Li>
      ))}
     </Ul> 
    </Div>
    
  );
}

export default Cocktails;