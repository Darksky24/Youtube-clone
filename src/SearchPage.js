import React from 'react'
import "./SearchPage.css"
import VideoRow from "./VideoRow.js"
import pic from './img/dog.jpg'
function SearchPage() {
  return (
    <div className="SearchPage">
      
      <VideoRow
      thumbnails={pic}
      title =" How to feed your dog with natural food"
      channel="Howlizter Go"
      views="444k"
      timestamp="2 years ago"
      />
      
      <VideoRow
      thumbnails={pic}
      title =" How to feed your dog with natural food"
      channel="Howlizter Go"
      views="444k"
      timestamp="2 years ago"
      />
      
      <VideoRow
      thumbnails={pic}
      title =" How to feed your dog with natural food"
      channel="Howlizter Go"
      views="444k"
      timestamp="2 years ago"
      />
      
      <VideoRow
      thumbnails={pic}
      title =" How to feed your dog with natural food"
      channel="Howlizter Go"
      views="444k"
      timestamp="2 years ago"
      />
      
      <VideoRow
      thumbnails={pic}
      title =" How to feed your dog with natural food"
      channel="Howlizter Go"
      views="444k"
      timestamp="2 years ago"
      />
    </div>
    
  )
}

export default SearchPage