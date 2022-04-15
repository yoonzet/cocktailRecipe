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
    </>
    
  );
}

export default App;
