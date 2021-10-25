import React from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <span className='logo'> The Spot</span>
      </div>
      <div className='topbarCenter'>
        <div className='searchbar'>
          <Search className='searchIcon' />
          <input
            placeholder='Search for friends, posts or video'
            className='searchInput'
          />
        </div>
      </div>
      <div className='topbarRight'>
        <div className='topbarLinks'>
          <span className='topBarLink'>Homepage</span>
          <span className='topBarLink'>Timeline</span>
        </div>
        <div className='topbarIcon'>
          <div className='topbarIconItem'>
            <Person />
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className='topbarIconItem'>
            <Chat />
            <span className='topbarIconBadge'>2</span>
          </div>
          <div className='topbarIconItem'>
            <Notifications />
            <span className='topbarIconBadge'>1</span>
          </div>
        </div>
      </div>
      <img src='/images/profile.jpg' alt='' className='topbarImg' />
    </div>
  );
}
