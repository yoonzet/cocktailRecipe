import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import{
  BrowserRouter,
  Routes, //Route를 찾는 역할. Route를 찾으면 컴포넌트를 렌더링한다.
  Route,
}from "react-router-dom";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import Detail from "./Pages/Detail";
import SearchBanner from "./components/SearchBanner";
import styled from "styled-components";

const Footer = styled.div`
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
            <Route path="/detail/:idDrink" exact element={<Detail/>}/>
            <Route path="/detail/:idDrink" exact element={<SearchBanner/>}/>
        </Routes>
      </BrowserRouter>
      <Footer>ⓒ2022 Portfolio <br /> yoonzet703@gmail.com / Lee yoonji</Footer>
    </>
    
  );
}

export default App;
