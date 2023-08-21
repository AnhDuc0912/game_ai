import React, { Component } from "react";

import "./Character.css";

export default class Bomb extends Component {
  render() {
    return (
      <>
        <div class="container">
          <div class="birds-container">
            <div class="black">
              <div class="hair"></div>
              <div class="head"></div>
              <div class="eye left">
                <div class="pupil"></div>
                <div class="eyebrow"></div>
              </div>
              <div class="eye right">
                <div class="pupil"></div>
                <div class="eyebrow"></div>
              </div>
              <div class="mouth"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
