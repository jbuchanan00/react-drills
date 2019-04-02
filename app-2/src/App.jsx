import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  state = {
    list: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
  }


  render() {
    const list =
    this.state.list.map((item, index) => {
      return <h2 key={index}>{item}</h2>
    })
    return (
      <div className="App">{list}
      </div>
    );
  }
}

export default App;
