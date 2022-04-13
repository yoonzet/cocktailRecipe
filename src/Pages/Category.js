import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Banner from '../components/Banner';
import CategoryBtn from '../components/CategoryBtn';
import axios from "axios"

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

function Category() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchUsers = async () => {
      try {
        setError(null);
        setUsers(null);
        setLoading(true);
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`
        );
        setUsers(response.data.drinks);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
  
    useEffect(() => {
      fetchUsers();
    }, []);
  
    if (loading) return <div>로딩중..</div>; 
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;

    
  return (
    <div>
     <Banner/>
     <CategoryBtn />
     <Div>
	    <Ul>
	      {users.map(user => (
	        <Li key={user.idDrink}>
            <Img src={user.strDrinkThumb}  alt="" />	          
            {user.strDrink}
	        </Li>
	      ))}
	    </Ul>
		</Div>
    </div>
  )
}

export default Category;