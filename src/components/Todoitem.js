import React, { Component } from "react";
import "./Todoitem.css";
var classNames = require("classnames");

class Todoitem extends Component {
  render() {
    const { item } = this.props;
    var className = classNames("Todoitem", {
      "Todoitem-complete": item.isComplete
    });
    return (
      <div className={className}>
        <p>{item.title}</p>
      </div>
    );
  }
}

export default Todoitem;
