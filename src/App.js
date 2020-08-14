import React from "react";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Content from "./Content";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <NavBar />
        <Content />
        <SideBar />
      </div>
    </div>
  );
}

export default App;
