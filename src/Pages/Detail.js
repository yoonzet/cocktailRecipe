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
  /* display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center; */
`
const ImgWrap = styled.div `
  position: relative;
  /* background-color: #333; */
`
const Img = styled.img `
  width: 400px;
  border-radius: 20px;
`
const BtnWrap = styled.div `
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
  margin: 20px 50px;
`
const RightBG = styled.div `
  background-color: #eee8;
  border-radius: 20px;
  padding: 20px;
`
const ColorBg = styled.span`
  width: 250px;
  background-color: #eee; 
  border-radius: 30px;
  padding: 5px 10px;
  margin: 5px 5px;
  color: #555;
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
            <BtnWrap>
              <LikeBtn 
              cocktail={cocktail}
              idDrink={cocktail.idDrink}/>
            </BtnWrap>
           </ImgWrap>
          <ColorBg>{cocktail.strAlcoholic}</ColorBg>  
          {/* <ColorBg>Category: {cocktail.strCategory}</ColorBg> */}
          <ColorBg>Glass: {cocktail.strGlass}</ColorBg>  
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