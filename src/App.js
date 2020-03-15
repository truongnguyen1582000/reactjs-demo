import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todoitem from "./components/Todoitem";

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title: "Go home", isComplete: true },
      { title: "Rest", isComplete: false },
      { title: "Eat", isComplete: true }
    ];
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.todoItems.map((item, index) => (
            <Todoitem key={index} item={item} />
          ))}
        </header>{" "}
      </div>
    );
  }
}

export default App;
