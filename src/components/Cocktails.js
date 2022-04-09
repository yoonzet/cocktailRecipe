import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { Reset } from 'styled-reset'


const Div = styled.div `
    margin:0 10vw;
  `
const Ul = styled.ul `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`

const Li = styled.li `
  /* float:  left; */
  /* margin: 0 20px; */
width: 15vw;
margin: 20px 1vw;
text-align: center;
`

const Img = styled.img `
  width: 100%;
  border-radius: 10px;
`

const Cocktails = () => {
  const [cocktails, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setUsers(null);
        setLoading(true);
        const response = await axios.get(
          'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
        );
        setUsers(response.data.drinks); 
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
        <Reset />
      <Ul>
      {cocktails.map(user => (
        <Li key={user.idDrink}>
               <Img src={user.strDrinkThumb} alt="" />
               <p>{user.strDrink}</p>            
        </Li>
      ))}
     </Ul> 
    </Div>
    
  );
}

export default Cocktails;