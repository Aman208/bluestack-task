import React from "react";
import { Loader } from "semantic-ui-react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <Loader style={{ marginTop: "5%" }} active inline="centered" />;
  }

  return (
    <div>
      <div className="ui embed">
        <iframe
          title={video.video_title}
          src={video.video_embed_url + "?autoplay=1&mute=1"}
        ></iframe>
      </div>
      <div className="ui segment">
        <h3 className="ui header">{video.video_title} </h3>
        <h5>{video.video_description}</h5>
        <p>Channel Title : {video.channel_title}</p>
        <p>Total Views : {video.total_views}</p>
        <p> <a href={video.video_url}> View on Youtube </a></p>
      </div>
    </div>
  );
};

export default VideoDetail;
