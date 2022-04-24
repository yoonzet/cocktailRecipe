import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import LikeBtn from "../components/LikeBtn";

//================== style ======================
const Container = styled.div `
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 80px;
  line-height: 30px ;
`
const LeftWrap = styled.div `
  /* margin: 0 20px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 20px;
`
const ImgWrap = styled.div `
  position: relative;
  /* background-color: #333; */
`
const Img = styled.img `
  width: 80vw;
  max-width: 400px;
  border-radius: 20px;
`
const CategoryWrap = styled.div`
  display: flex;
  justify-content: center;
`
const Category = styled.span`
  background-color: #eee; 
  border-radius: 30px;
  padding: 0 1rem;
  margin: 0.5rem;
  color: #555;
`

const LikeBtnWrap = styled.div `
  position: absolute;
  top: 7%;
  right: 10%;
`
const Name = styled.h2 `
  font-size: 40px;
  margin: 20px;
  color: #605950;
`
const RightWrap = styled.div `
  display: flex;
  flex-direction: column;
  margin-top:20px;
`
const RightBG = styled.div `
  width: 90vw;
  max-width: 500px;
  background-color: #eee8;
  border-radius: 20px;
  padding: 1.5rem;
`

const Title = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 18px;
  border-radius: 10px;
  margin-bottom: 10px;
  color: #605950;
`
const Bold = styled.span`
  font-weight: bold;
  background-color: #ddd; 
  border-radius: 30px;
  padding: 5px 10px;
  margin: 0 5px; 
  color: #605950;
  display:${(props =>
    props.display === null ? 'none' : '')}; ;
  
`
const P = styled.p`
  max-width: 500px;
  margin-bottom: 10px;
  /* border-bottom: 1px solid red; */
`



//================== component ======================

function Detail() {
  const { idDrink } = useParams();
  const [cocktail, setCocktail] = useState([]);
  
  useEffect(() => {
    getCocktail();
  }, []);

  const getCocktail = async () => {
    const json = await (
      await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
    ).json();
    // console.log(json);
    setCocktail(json.drinks);
  };
 
  return(
    <>
    {cocktail.map(cocktail => (
    <div key={cocktail.strDrink}>
    <Container>
        <LeftWrap>
          <ImgWrap>
            <Img src={cocktail.strDrinkThumb} alt="" />
            <LikeBtnWrap>
              <LikeBtn 
              cocktail={cocktail}
              idDrink={cocktail.idDrink}/>
            </LikeBtnWrap>
           </ImgWrap>
          <CategoryWrap>
            <Category>{cocktail.strAlcoholic}</Category>  
            {/* <Category>Category: {cocktail.strCategory}</Category> */}
            <Category>Glass: {cocktail.strGlass}</Category>  
          </CategoryWrap>
        </LeftWrap>
           
        <RightWrap>     
            <Name>{cocktail.strDrink}</Name>
            <RightBG>
              <Title>Ingredients</Title>  
              <P><Bold>{cocktail.strIngredient1} </Bold>{cocktail.strMeasure1}</P>    
              <P><Bold>{cocktail.strIngredient2} </Bold>{cocktail.strMeasure2}</P>    
              <P><Bold display={cocktail.strIngredient3}>{cocktail.strIngredient3} </Bold>{cocktail.strMeasure3}</P>    
              <P><Bold display={cocktail.strIngredient4}>{cocktail.strIngredient4} </Bold>{cocktail.strMeasure4}</P>    
              <P><Bold display={cocktail.strIngredient5}>{cocktail.strIngredient5} </Bold>{cocktail.strMeasure5}</P> 

              <Title>How to</Title>    
              <P>{cocktail.strInstructions}</P>  
            </RightBG>
  
          </RightWrap>                 
    </Container>
    </div>   
      ))}

    </>   
  );
}
export default Detail;