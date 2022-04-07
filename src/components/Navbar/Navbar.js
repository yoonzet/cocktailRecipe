import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink}from './NavbarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
          <NavLink to='/'>
            <h2 style={{color:'#555', whiteSpace:'nowrap',}}>Cocktail Recipe🍹</h2>
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
          </NavMenu>
          <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar;