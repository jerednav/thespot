import React from 'react'
import './share.css'
import { PermMedia } from '@material-ui/icons'

export default function share() {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className='shareProfileImg' src="/images/profile.jpg" alt="" />
                    <input placeholder="What's on your mind?" className="shareInput" />
                </div>
                <hr className='shareHr' />
                <div className="shareBottom">
                    <div className="shareOption">
                        <PermMedia className='shareIcon' />
                        <span className='shareOptionText'>Photo or Video</span>
                    </div>
                </div>
            </div>
        </div>
            )
}
