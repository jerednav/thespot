import React from 'react'
import './closefriend.css'

export default function closeFriend({user}) {
    return (
        <div>
            <li className="sidebarFriend">
                        <img className ='sidebarFriendImg' src={user.profilePicture} alt='' />
                        <span className="sidebarFriendName">{user.username}</span>
                    </li>
        </div>
    )
}
