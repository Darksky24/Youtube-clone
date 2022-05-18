import React from 'react'
import { Avatar } from '@mui/material';
import "./VideoPreview.css";
function VideoPreview({thumbnails,title,channel,channel_pic,views,timestamp}) {
  return (
    <div className="VideoPreview">
      <img className="VideoPreview_thumbnail" src={thumbnails} alt=""/>
      <div className="VideoPreview_info">
        <Avatar className="VideoPreview_avatar" 
        src={channel_pic} alt={channel}
        />
        <div className='VideoPreview_videotext'>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} <b style={{fontSize:20}}>&#183;</b>  {timestamp}
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoPreview