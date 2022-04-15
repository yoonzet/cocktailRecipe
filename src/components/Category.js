import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import styled from "styled-components";
import Cocktails from "./Cocktails";
import FilterBtn from './FilterBtn';
import { useGlobalContext } from "../context";


const Div=styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2.5rem;
  padding: 40px 15%;
` 
const Active = styled.div`
  &.active{
    /* display: none;
    background-color: red; */
  }
`

function Category() {
  const [popular, setPopular] = useState([]);    
  const [filtered, setFiltered] = useState([]);
  const [activeIngredient, setActiveIngredient] = useState(0);

  useEffect(()=>{
    fetchPopular();
  },[]);

  // const { cocktailList, loading } = useGlobalContext();
  // if(cocktailList === null){
  //   return 'hi';
  // }

  const fetchPopular = async () =>{
    const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m')
    const cocktails = await data.json();
    // console.log(cocktails);
    setPopular(cocktails.drinks);
    setFiltered(cocktails.drinks);
  };

  return (
    <div className="Category">
      <FilterBtn
      popular={popular} 
      setFiltered={setFiltered} 
      activeIngredient={activeIngredient} 
      setActiveIngredient={setActiveIngredient}
      />
      <motion.div layout>
        <AnimatePresence>
        <Div>  
         {/* {cocktailList.map((cocktail)=>{
          return(
          //   <Cocktails 
          // key={cocktail.idDrink} 
          // cocktail={cocktail}
          // idDrink={cocktail.idDrink}
          // />
          )
                    
        })}  */}
         
        {filtered.map((cocktail)=>{
          return <Cocktails 
          key={cocktail.idDrink} 
          cocktail={cocktail}
          idDrink={cocktail.idDrink}
          />          
        })}          
        
        </Div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Category;
