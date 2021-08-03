import React, { Component } from "react";
import "./task1.scss";

class Task1 extends Component {
  state = {
    value: "",
    boxArray: [],
  };

  render() {
    const { value } = this.state;
    let arr = value.split("");
    return (
      <div className="task1-cont">
        <input
          type="text"
          value={value}
          onChange={(ev) => this.setState({ value: ev.target.value })}
          className="form-input"
          placeholder="Enter some text"
        />

        <div className="box-cont">
          {arr.map((d) => (
            <div className="box">{d}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Task1;
