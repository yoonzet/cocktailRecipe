import React from 'react';
import styled from "styled-components";

// import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink}from './NavbarElements'

export const ImgWrap = styled.div `
  height: 60vh;
  /* background-image: url("https://images.unsplash.com/photo-1531002423613-b7d0e005770b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" ); */
  background-image: url("https://images.unsplash.com/photo-1497990902153-c6d041aad676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2136&q=80" );
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const H1 = styled.h1 `
  color: #fff;
  margin-right: 20px;
  margin-bottom: 20px;
`

export const InputSearch = styled.input `
  all: unset;
  width: 350px;
  height: 50px;
  background-color: #fff7;
  border-radius: 5px;
  padding-left: 20px;
  box-sizing: border-box;
`

const Banner = () => {
  return (
    <ImgWrap>
        <H1>어떤 칵테일을 찾으시나요?</H1>
        <InputSearch placeholder='영문으로 입력해주세요'/>
    </ImgWrap>
  )
}

export default Banner;