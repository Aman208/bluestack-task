import React from 'react'
import VideoItem from './VideoItem';
import { Item } from 'semantic-ui-react';


const VideoGrid = ({videos, onVideoSelect }) => {
    const renderList = videos.map(video =>{
        return  <VideoItem key={video._id}  video={video} />
           
    });

    return (
       
        <Item.Group>
         {renderList}
         </Item.Group>
  

  );
}

export default VideoGrid;