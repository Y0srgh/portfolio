import { useState } from "react";
import reactLogo from "./assets/react.svg";
import triangleTop from "/triangles-top.svg";
import triangleBottom from "/triangles-bottom.svg";
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
