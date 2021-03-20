import React, { Component } from "react";
import VideoDetail from "../../components/VideoDetail";
import youtubeApi from "../../apis/youtube";
import Navbar from "../../components/navbar";

export default class VideoDetailScreen extends Component {
  state = {
    selectedVideo: null,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.onTermSubmit(id);
  }

  onTermSubmit = async (id) => {
    const response = await youtubeApi.get(`/fetchVideoById/${id}`);

    this.setState({
      selectedVideo: response.data.video,
    });
  };

  render() {
    return (
      <div className="ui container">
        <Navbar activeItem="video-detail" />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              {/* <VideoList 
                videos={this.state.videos} 
                onVideoSelect={this.onVideoSelect} 
              /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
