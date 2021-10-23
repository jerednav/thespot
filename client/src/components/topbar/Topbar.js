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
          <Search />
          <input
            placeholder='Search for friends, posts or video'
            className='searchInput'
          />
        </div>
      </div>
      <div className='topbarRight'></div>
      <div class='topbarLinks'>
        <span class='topBarLink'>Homepage</span>
        <span class='topBarLink'>Timeline</span>
      </div>
      <div class='topbarIcon'>
        <div class='topbarIconItem'>
          <Person />
          <span class='topbarIconBadge'>1</span>
        </div>
        <div class='topbarIconItem'>
          <Chat />
          <span class='topbarIconBadge'>2</span>
        </div>
        <div class='topbarIconItem'>
          <Notifications />
          <span class='topbarIconBadge'>1</span>
        </div>
      </div>
      <img src='/images/profile.jpg' alt='' class='topbarImage' />
    </div>
  );
}
