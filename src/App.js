import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tile from "./Tile";

class App extends Component {
  render() {
      const tiles =[];
      const props = ["bar1", "bar2", "bar3"];
      props.forEach(prop => {tiles.push(<Tile prop={prop} />)});
      return (<div className="App">
      <div className="tiles">
        {tiles}<Tile prop={"+"} className="addNew" onClick={() => alert("+++")} />
        </div>
      </div>);
  }
}

export default App;
