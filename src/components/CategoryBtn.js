import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import Banner from "./Banner";
import { CategoryData } from "./CategoryData";

//------------------style---------------------


const BtnWrap = styled.div`
    margin:40px 15vw;
    display: flex;
    /* justify-content: space-between; */
`
const NavLink = styled(Link)`
    all: unset;
    background-color: #C4C4C4;
    border-radius: 20px;
    padding: 10px 2vw;
    margin-right: 15px;
    color: #fff;
    font-size:18px;
    white-space: nowrap;
    cursor: pointer;

    &.active, &:hover{
       background-color: #AEA69B;
    }
`
//-------------------component--------------------

function CategoryBtn() {

  return (
  <>
    <BtnWrap>
       {CategoryData.map( (item, index) =>(         
         <NavLink 
         to={item.path} 
         active-style="true" 
          key={index}
         >{item.category}
         </NavLink> 
        ))}
    </BtnWrap>
    
  </>
    
  )
}


export default CategoryBtn;