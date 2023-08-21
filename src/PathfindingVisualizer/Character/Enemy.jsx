import React, { Component } from "react";

import "./Character.css";

export default class Enemy extends Component {
  render() {
    return (
      <>
        <div class="container">
          <div class="birds-container">
            {/* <div class="minion">
              <div class="ear left"></div>
              <div class="ear right"></div>
              <div class="eye left"></div>
              <div class="eye right"></div>
              <div class="nose"></div>
            </div> */}
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
