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
import Popular from "./components/CategoryPage/Popular";
import NonAlcoholic from "./components/CategoryPage/NonAlcoholic";
import Vodka from "./components/CategoryPage/Vodka";
import Gin from "./components/CategoryPage/Gin";
import Tequila from "./components/CategoryPage/Tequila";
import Rum from "./components/CategoryPage/Rum";
import Banner from "./components/Banner";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/explore" exact element={<Explore/>}/>
            <Route path="/category/popular" element={<Popular/>}/>
            <Route path="/category/non-Alcoholic" element={<NonAlcoholic/>}/>
            <Route path="/category/vodka" element={<Vodka/>}/>
            <Route path="/category/gin" element={<Gin/>}/>
            <Route path="/category/tequila" element={<Tequila/>}/>
            <Route path="/category/run" element={<Rum/>}/>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
