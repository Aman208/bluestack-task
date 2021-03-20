import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "home" };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentDidMount(){
      
    this.setState({  activeItem : this.props.activeItem });
}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem} = this.state;

    return (
      <Menu inverted fluid>
        <Menu.Item as={Link} name="home" color="green" to="/">
          <Icon name="youtube" />
          Youtube Trending Page
        </Menu.Item>

        <Menu.Item
          as={Link}
          name="home"
          color="green"
          to="/"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          <Icon name="home" /> Home{" "}
        </Menu.Item>

        <Menu.Item
          as={Link}
          name="video-detail"
          color="green"
          active={activeItem === "video-detail"}
        >
          <Icon name="video" />
          View Video 
        </Menu.Item>

        
      </Menu>
    );
  }
}
