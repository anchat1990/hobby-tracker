import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tile from "./Tile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="search-bar" />
        <div className="tiles">
          <Tile prop={"bar1"} />
          <Tile prop={"bar2"} />
          <Tile prop={"bar3"} />
          <Tile prop={"bar4"} />
          <Tile prop={"bar5"} />
          <Tile prop={"bar6"} />
          <Tile prop={"bar7"} />
          <Tile prop={"bar8"} />
          <Tile prop={"bar9"} />
          <Tile prop={"bar10"} />
          <Tile prop={"+"} className="addNew" onClick={() => alert("+++")} />
        </div>
      </div>
    );
  }
}

export default App;
