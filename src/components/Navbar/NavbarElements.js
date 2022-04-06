import styled from "styled-components";
import {
  NavLink as Link
} from "react-router-dom";
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav `
  background-color:#222;
  height: 80px;
  display: flex;
  justify-content: start;
  padding: 0.5rem (calc(100vw - 1000px) / 2);
  z-index: 10;
`

// export const Logo = styled.h1`
//   color: red;
// `
export const NavLink = styled(Link)` 
  color:#999;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;

  &.active, &:hover{
    color:#fff;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color:#fff;

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

export const NavMenu = styled.div `
  display: flex;
  align-items: center;
  width: 100vw;
  white-space: nowrap;
  margin-left: 20px;

  @media screen and (max-width:768px) {
    display: none ;
  }
`
export const NavBtn = styled.nav `
  display: flex;
  align-items: center;
  margin-right:24px; 
  justify-content: flex-end;
  width: 100vw;


  @media screen and (max-width:768px) {
    display: none ;
  }
`

export const NavBtnLink = styled(Link)`
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