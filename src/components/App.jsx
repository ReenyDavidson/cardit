import React, { Component } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { Switch, Route } from "react-router-dom";
import FeedPage from "./FeedPage";
import FriendsPage from "./FriendsPage";
import WorkoutPage from "./WorkoutPage";
import ProfilePage from "./ProfilePage";

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            backgroundColor: "gainsboro",
            height: "100vh",
            backgroundAttachment: "fixed",
          }}
        >
          <NavBar />

          <SideBar />

          <Switch>
            <Route exact path="/" component={FeedPage} />
            <Route path="/friends" component={FriendsPage} />
            <Route path="/workouts" component={WorkoutPage} />
            <Route path="/profile" component={ProfilePage} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
