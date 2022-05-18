/* eslint-disable no-unused-vars */
import React from 'react';
import SidebarFeature from './SidebarFeature';
import HomeIcon from '@mui/icons-material/Home'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import './Sidebar.css';
function Sidebar() {
  return (
    <div className ="sidebar">

    <SidebarFeature selected Icon={HomeIcon}title="Home" />
    <SidebarFeature Icon={WhatshotIcon} title="Trending" />
    <SidebarFeature Icon={SubscriptionsIcon} title="Subscriptions" />
    <hr/>
    <SidebarFeature Icon={VideoLibraryIcon} title="Library" />
    <SidebarFeature Icon={HistoryIcon} title="History" />
    <SidebarFeature Icon={OndemandVideoIcon} title="Your videos" />
    <SidebarFeature Icon={WatchLaterIcon} title="Watch later" />
    <SidebarFeature Icon={ThumbUpAltIcon} title="Liked videos" />
    <SidebarFeature Icon={ExpandMoreIcon} title="Show more" />

    <hr/>
    </div>
  )
}

export default Sidebar