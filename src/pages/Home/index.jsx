import React, { Component } from "react";

import "./Home.css";
import { Link } from "react-router-dom";
import song from "../../assets/themesong.mp3";

export default class Home extends Component {
  render() {
    return (
      <div className="home wrapper">
        <audio style={{ visibility: 'hidden' }} controls autoPlay>
          {" "}
          <source src={song} type="audio/mpeg" />
        </audio>
        <h1 className="home-title bouncing-text">CHÚ CHIM DUI DẺ</h1>
        <div className="action">
          <Link to={"/game"} className="game-button">
            Dô chơi game nào
          </Link>
        </div>
      </div>
    );
  }
}
