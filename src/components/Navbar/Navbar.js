//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="itemLeft">A Memory Game</li>
          <li className="itemCenter"></li>
          <li className="itemRight">Your Score: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;