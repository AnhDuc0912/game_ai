import React, { Component } from "react";

import "./Character.css";

export default class Enemy extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="birds-container">
            <img
              style={{
                width: "25px",
                height: "25px",
              }}
              alt="pig"
              src={require("../../assets/pig.png")}
            />
          </div>
        </div>
      </>
    );
  }
}
