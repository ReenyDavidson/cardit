import React, { Component } from "react";
import "../styles/NavBar.css";

export class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="nav-container">
          <div className="nav-logo">
            <h3>Cardit</h3>
          </div>
          <div className="nav-form-container">
            <form className="nav-form">
              <input placeholder="search" className="nav-input" />
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
