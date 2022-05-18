import React from 'react'
import './SidebarFeature.css'
function SidebarFeature({selected,Icon,title}) {
  return (
    <div className={`sidebarFeature ${selected && "selected"}`}>
      <Icon className='sidebar_icon'/>
      <h2 className='sidebar_title'>{title}</h2>  
    </div>
  )
}

export default SidebarFeature