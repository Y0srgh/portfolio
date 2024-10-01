import React from 'react'
import triangleTop from "./assets/triangles-top.svg";
import triangleBottom from "./assets/triangles-bottom.svg";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  return <>
    <img src={triangleTop} alt="" className="triangle-top triangle" />
    <img src={triangleBottom} alt="" className="triangle-bottom triangle" />
    <div className="container">

    <Header/>
    </div>
  </>;
}

export default App;
