import React, { Component } from "react";

import youtubeApi from "../../apis/youtube";
import VideoGrid from "../../components/VideoGrid";
import Navbar from "../../components/navbar";
import ScrapVideoScreen from '../../components/ScrapVideoScreen';
export default class HomeScreen extends Component {
  state = {
    videos: [],
  };

  componentDidMount() {
    this.onTermSubmit();
  }

  onTermSubmit = async () => {
    const response = await youtubeApi.get(`/fetchAllVideos`);

    this.setState({
      videos: response.data.videos,
    });
  };

  render() {
    return (
      <div className="ui container">
        <Navbar activeItem="home" />
        <ScrapVideoScreen/>
        <VideoGrid videos={this.state.videos}></VideoGrid>
      </div>
    );
  }
}
