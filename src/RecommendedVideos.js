import React from 'react'
import './RecommendedVideos.css'
import VideoPreview from './VideoPreview'
import pic1 from './img/channel-1.jpeg'
import pic2 from './img/channel-4.jpeg'
import pic3 from './img/channel-5.jpeg'
import pic4 from './img/channel-6.jpeg'
import pic5 from './img/thumbnail-1.webp'
import pic6 from './img/thumbnail-4.webp'
import pic7 from './img/thumbnail-5.webp'
import pic8 from './img/thumbnail-6.webp'

function RecommendedVideos() {
  return (
    <div className="recommended-videos">
     <h2>RecommendedVideos</h2> 
      <div className="recommendedVideos">
        <VideoPreview
        title="Talking AI with Google CEO in my office"
        views="4M views"
        timestamp="2 weeks ago"
        channel="Marques Brownlee"
        channel_pic={pic1}
        thumbnails={pic5}
        />
        <VideoPreview
        title="Kadane's Algorithms"
        views="300k views"
        timestamp="2 weeks ago"
        channel="Math Ninja"
        channel_pic={pic3}
        thumbnails={pic7}
        
        />
        <VideoPreview
        title="The simplest math problem no one can solve"
        views="27M views"
        timestamp="3 years ago"
        channel="Veritasium"
        channel_pic={pic2}
        thumbnails={pic6}
        />
        <VideoPreview
        title="The whole thing to next level"
        views="68M views"
        timestamp="2 weeks ago"
        channel="Mr.Beast"
        channel_pic={pic4}
        thumbnails={pic8}
        />
         <VideoPreview
        title="Talking AI with Google CEO in my office"
        views="4M views"
        timestamp="2 weeks ago"
        channel="Marques Brownlee"
        channel_pic={pic1}
        thumbnails={pic5}
        />
        <VideoPreview
        title="Kadane's Algorithms"
        views="300k views"
        timestamp="2 weeks ago"
        channel="Math Ninja"
        channel_pic={pic3}
        thumbnails={pic7}
        
        />
        <VideoPreview
        title="The simplest math problem no one can solve"
        views="27M views"
        timestamp="3 years ago"
        channel="Veritasium"
        channel_pic={pic2}
        thumbnails={pic6}
        />
        <VideoPreview
        title="The whole thing to next level"
        views="68M views"
        timestamp="2 weeks ago"
        channel="Mr.Beast"
        channel_pic={pic4}
        thumbnails={pic8}
        />
        

      </div>
    </div>
  )
}

export default RecommendedVideos