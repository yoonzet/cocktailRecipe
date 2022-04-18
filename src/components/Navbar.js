import React, { useState } from 'react';
import {
  NavLink as Link
} from "react-router-dom";
import styled from "styled-components";
import {FaBars} from 'react-icons/fa';
import {IoClose} from 'react-icons/io5';
import { SidebarData } from './navSlideData';

//------------------style---------------------

 const Nav = styled.nav `
  /* background-color:#222; */
  height: 80px;
  /* position: absolute; */
  display: flex;
  justify-content: start;
  padding: 0.5rem (calc(100vw - 1000px) / 2);
  z-index: 10;
`

 const NavLink = styled(Link)` 
  color:#999;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;

  &.active, &:hover{
    color:#555;
  }
`

 const NavMenu = styled.div `
  display: flex;
  align-items: center;
  width: 100vw;
  white-space: nowrap;
  margin-left: 20px;

  @media screen and (max-width:768px) {
    display: none ;
  }
`
 const NavBtn = styled.nav `
  display: flex;
  align-items: center;
  margin-right:24px; 
  justify-content: flex-end;
  width: 100vw;


  @media screen and (max-width:768px) {
    display: none ;
  }
`

 const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background-color:#666;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover{
    transition: all 0.2s ease-in-out;
    background-color: #888;
    color:#010606;
  }
`
//사이드바 스타일
const BarsIcon = styled(FaBars)`
display: none;
color:#555;

@media screen and (max-width:768px){
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size:1.8rem;
  cursor: pointer;
}
`
const NavSide = styled.div`
  width: 250px;
  height: 100vh;
  background-color:#fff;
  border-left: 1px solid #eee;
  position: fixed;
  z-index: 9;
  right: 0;
  transition: 0.3s;
  &.active{
    transform: translateX(100% );
  }
`
const SideWrap = styled.div`
   margin-top: 80px;
`
const CloseIcon = styled(IoClose)`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size:2rem;
  cursor: pointer;
  color: #333;
  &:hover{
    color:#666;
  }
`
const NavText = styled.li`
  all: unset;
  font-size: 18px;
  font-weight: bold;
  line-height: 50px;
  margin: 0 15px;
  cursor: pointer;
`


//------------------component---------------------

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <Nav>
          <NavLink to='/'>
            <h2 style={{color:'#555', whiteSpace:'nowrap',}}>Cocktail Recipe🍹</h2>
          </NavLink>

          <NavMenu>
             <NavLink to='/' active-style="true">
                 홈
             </NavLink> 
             <NavLink to='/explore' active-style="true">
                 둘러보기
             </NavLink> 
             <NavLink to='/library' active-style="true">
                 보관함
             </NavLink>             
          </NavMenu>
          
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>

          <BarsIcon onClick={showSidebar}/>
          <NavSide className={sidebar ? "" : 'active'}> 
            <SideWrap>
                <Link to='#'>
                  <CloseIcon onClick={showSidebar}/>
                </Link>
              {SidebarData.map((item, index)=>{
                return (
                  <NavLink to={item.path} key={index} >
                    <NavText>{item.title}</NavText>
                  </NavLink>
                )
              })}
            </SideWrap>
          </NavSide>

      </Nav>
    </>
  )
}

export default Navbar;