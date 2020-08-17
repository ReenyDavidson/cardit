import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/SideBar.css";
import person from "../images/person.png";
import yoga from "../images/yoga.png";
import rss from "../images/rss.png";
import friends from "../images/friends.png";
import profile from "../images/ronaldo.jfif";

export class SideBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="side-nav">
          <div>
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <button>
                <div className="side-profile">
                  <img src={profile} alt="" className="side-image" />
                </div>
                <div className="side-info">
                  <div> Cristiano Ronaldo</div>
                  <div style={{ color: "slategrey" }}>@cristiano</div>
                </div>
              </button>
            </Link>
          </div>
          <div className="side-list">
            <ul>
              <li>
                <Link to="/profile" style={{ textDecoration: "none" }}>
                  <div className="side-items">
                    <div>
                      <img src={person} alt="" className="side-logo" />
                    </div>
                    <div className="side-text">Profile</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <div className="side-items">
                    {" "}
                    <div>
                      {" "}
                      <img src={rss} alt="" className="side-logo" />
                    </div>
                    <div className="side-text">Feed</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/friends" style={{ textDecoration: "none" }}>
                  <div className="side-items">
                    {" "}
                    <div>
                      <img src={friends} alt="" className="side-logo" />
                    </div>
                    <div className="side-text">Friends</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/workouts" style={{ textDecoration: "none" }}>
                  <div className="side-items">
                    {" "}
                    <div>
                      <img src={yoga} alt="" className="side-logo" />
                    </div>
                    <div className="side-text">Workouts</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/" style={{ textDecoration: "none" }}>
                  Settings and Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideBar;
