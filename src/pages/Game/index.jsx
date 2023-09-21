import React, { Component } from "react";
import "./Game.css";

import PathfindingVisualizer from "../../PathfindingVisualizer/PathfindingVisualizer";

export default class Game extends Component {
  render() {
    return (
      <div className="wrapper">
        <PathfindingVisualizer />
      </div>
    );
  }
}
