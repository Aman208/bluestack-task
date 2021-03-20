import React from "react";
import { Item } from "semantic-ui-react";

import { Link } from "react-router-dom";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Item  as={Link} to={"/video-detail/" + video._id}>
      <Item.Image
        size="medium"
        alt={video.video_title}
        className="ui image"
        wrapped
        src={video.video_thumbnail_image_url}
      />

      <Item.Content>
        <Item.Header>{video.video_title}</Item.Header>
        <Item.Description>{video.video_description}</Item.Description>
        <Item.Meta>
          <span>Total Views : {video.total_views}</span>
        </Item.Meta>
        <Item.Meta>
          <span>Channel Title : {video.channel_title}</span>
        </Item.Meta>
      </Item.Content>
    </Item>
  );
};

export default VideoItem;
