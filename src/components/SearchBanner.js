import React from 'react';
import styled from "styled-components";
import { useGlobalContext } from '../context';

//================== style ======================

const ImgWrap = styled.div `
  height: 60vh;
  background-image: url("https://images.unsplash.com/photo-1497990902153-c6d041aad676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2136&q=80" );
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
`
const InputSearch = styled.input `
  all: unset;
  width: 350px;
  height: 50px;
  background-color: #fff9;
  border-radius: 5px;
  padding-left: 20px;
  box-sizing: border-box;
  margin-top: 20px;
`
//================== component ======================


const SearchBanner = () => {
  const { setSearchTerm , cocktailList} = useGlobalContext();
  const searchValue = React.useRef('');

  React.useEffect(()=>{
    searchValue.current.focus();
  },[]);
  
  if(cocktailList === null){
    return 'hi';
  }

  const onChange = () =>{
    setSearchTerm(searchValue.current.value);
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
  };

  return (
    <ImgWrap>
        <h1>어떤 칵테일을 찾으시나요?</h1>

        <form onSubmit={handleSubmit}>
          <InputSearch 
          type='text' 
          placeholder='영문으로 입력해주세요'
          ref={searchValue}
          onChange={onChange}/>
        </form>
        {cocktailList.map((cocktail)=>{          
          if(cocktailList.length >3 ){
          return(

              <p>{cocktail.strDrink}</p>
              )
            }
                    
        })} 
    </ImgWrap>
  )
}

export default SearchBanner;