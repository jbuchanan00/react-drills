import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  state = {
    text: ""
  }

  updateText = (text) => {
    this.setState({text: text})
  }
  render() {
    return (
      <div className="App">
        <input onChange={event => this.updateText(event.target.value)}></input>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
