import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import{
  BrowserRouter,
  Routes, //Route를 찾는 역할. Route를 찾으면 컴포넌트를 렌더링한다.
  Route,
  Router,
}from "react-router-dom";
import styled from "styled-components";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import Detail from "./Pages/Detail";
import SearchBanner from "./components/SearchBanner";
import Category from "./Pages/Category";
import MyBox from "./Pages/MyBox";

const Footer = styled.div`
  /* height: 100vh; */
  position: relative;
  bottom: 0;
  margin-bottom: 3%;
  text-align: center;
  font-size: 12px;
`
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/explore" exact element={<Explore/>}/>
            <Route path="/mybox" exact element={<MyBox/>}/>
            <Route path="/detail/:idDrink" exact element={<Detail/>}/>
            <Route path="/detail/:idDrink" exact element={<SearchBanner/>}/>
            <Route path="/category/:ingredientName" exact element={<Category/>}/>
        </Routes>
      </BrowserRouter>
      <Footer>ⓒ2022 Portfolio <br /> yoonzet703@gmail.com / Lee yoonji</Footer>
    </>
  );
}

export default App;
