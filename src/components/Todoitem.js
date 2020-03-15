import React, { Component } from "react";
import App from "../App";

class Todoitem extends Component {
  render() {
    return (
      <div className="Todoitem">
        <p>{this.props.title}</p>
      </div>
    );
  }
}

export default Todoitem;
