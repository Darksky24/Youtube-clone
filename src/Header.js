/* eslint-disable no-unused-vars */
import React ,{useState} from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppIcon from '@mui/icons-material/Apps';
import NotificationIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import {Link} from "react-router-dom"
function Header() {
  const [inputSearch,setInputSeacrh] =useState('');
  return (
    <div className="header">
      <div className="header_left">
      <MenuIcon />
      <Link to="/">
      <img className="header_logo" 
        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
        alt=""/>
      </Link>
      
      </div>

      <div className="header_mid">
      <input 
        onChange={e => setInputSeacrh(e.target.value)}
        value={inputSearch}  
        type="text" 
        placeholder='Search'
      />
        <Link to ={`/search/${inputSearch}`}>
        <SearchIcon className="header_searchButton" />
        </Link>
      </div>
      
      <div className="header_right">
        <VideoCallIcon className='header_icon'/>
        <AppIcon className='header_icon'/>
        <NotificationIcon className='header_icon'/>
        <Avatar alt="" src={require('./img/dog.jpg')} />
      </div>
      
    </div>
  )
}

export default Header