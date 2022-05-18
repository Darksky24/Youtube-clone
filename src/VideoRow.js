import React from 'react'
import "./VideoRow.css"
function VideoRow({thumbnails,title,channel,views,timestamp}) {
  return (
    <div className="VideoRow">
      <img className="VideoRow_thumbnail" src={thumbnails} alt=""/>
        <div className='VideoRow_Text'>
          <h3>{title}</h3>
          <p className="VideoRow_headline">
            {channel} <span style={{fontSize:16}}>&#183;</span>{views} <b style={{fontSize:16}}>&#183;</b>  {timestamp}
          </p>
      </div>
    </div>
  )
}

export default VideoRow