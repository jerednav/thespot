import React from 'react'
import './rightbar.css'

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
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className='rightbarProfileImg' src="/images/ace.jpeg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Ace</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className='rightbarProfileImg' src="/images/ace.jpeg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Ace</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className='rightbarProfileImg' src="/images/ace.jpeg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Ace</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
