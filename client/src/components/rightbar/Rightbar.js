import React from 'react'
import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'

export default function Rightbar({profile}) {

    const HomeRightbar = () => {
        return (
            <>
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
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
            <h4 className='rightBarTitle'>User Information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">New York</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Madrid</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">New York</span>
                </div>
            </div>
            </>

        )
    }
    return (
        <div className="rightbar">
          <div className="rightbarWrapper">
            {profile ? <ProfileRightbar /> : <HomeRightbar />}
          </div>
        </div>
      );
    }
    

