import React, { Component } from "react";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import HomeScreen from "./screens/home/HomeScreen";
import VideoDetailScreen from "./screens/video_detail/VideoDetailScreen";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/video-detail/:id" component={VideoDetailScreen} />
        </Switch>
      </Router>
    );
  }
}
