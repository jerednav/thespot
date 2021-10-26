import React from 'react'
import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'

export default function Rightbar() {
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className='birthdayImg' src="/images/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Ace</b> has a birthday today.
                    </span>
                </div>
                <img className='rightbarAd' src="/images/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=> (
                        <Online key ={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    )
}
