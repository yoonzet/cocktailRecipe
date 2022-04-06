import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink}from './NavbarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
          <NavLink to='/'>
            <h1 style={{color:'#fff',}}>Yoon Music</h1>
          </NavLink>

          <Bars />

          <NavMenu>
             <NavLink to='/' activeStyle>
                 홈
             </NavLink> 
             <NavLink to='/explore' activeStyle>
                 둘러보기
             </NavLink> 
             <NavLink to='/library' activeStyle>
                 보관함
             </NavLink> 
             <NavLink to='/search' activeStyle>
                 검색
             </NavLink> 
             
          </NavMenu>
          <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar;