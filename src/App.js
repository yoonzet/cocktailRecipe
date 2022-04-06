import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import{
  BrowserRouter as Router,
  Routes, //Route를 찾는 역할. Route를 찾으면 컴포넌트를 렌더링한다.
  Route,
}from "react-router-dom";
import Home from "./Pages";
import About from "./Pages";

function App() {
  return (
    <Router>
    <Navbar />
        <Routes>
            <Route path="/" exact elements={<Home/>}/>
            <Route path="/explore" exact elements={<About/>}/>
        </Routes>
      </Router>
  );
}

export default App;
