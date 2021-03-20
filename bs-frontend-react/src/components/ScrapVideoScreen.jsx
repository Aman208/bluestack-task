import React, { Component } from "react";
import youtubeApi from "../apis/youtube";

import {
  Button,
  Loader,
  Container,
  Message,
  Segment,
  Dimmer,
} from "semantic-ui-react";

export default class ScrapVideoScreen extends Component {
  state = {
    isLoading: false,
    successMessage: "",
    errorMessage: "",
  };

  onSubmit = async () => {
    this.setState({ isLoading: true });
    try {
      let result = await youtubeApi.get(`/scrapVideos`);
      this.setState({
        isLoading: false,
        successMessage: result.data.message,
        errorMessage: "",
      });
    } catch (err) {
      this.setState({
        isLoading: false,
        errorMessage: err.message,
        successMessage: "",
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.successMessage !== "" ? (
          <Message color="green">{this.state.successMessage}</Message>
        ) : null}
        {this.state.errorMessage !== "" ? (
          <Message color="red">{this.state.errorMessage}</Message>
        ) : null}
        {!this.state.isLoading ? (
          <Container style={{margin:"25px"}} >
            <Button color="green"  fluid onClick={this.onSubmit} size="large">
              Scrap Trending Video
            </Button>
          </Container>
        ) : (
          <Segment style={{ height: "142px" }}>
            <Dimmer active>
              <Loader
                size="huge"
                style={{ margin: "25%" }}
                active
                inline="centered"
              >
                {" "}
                Scraping Videos ..
              </Loader>
            </Dimmer>
          </Segment>
        )}
      </div>
    );
  }
}
