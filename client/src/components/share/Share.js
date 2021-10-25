import React from 'react'
import './share.css'
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'

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
                    <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia className='shareIcon' />
                        <span className='shareOptionText'>Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <Label className='shareIcon' />
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room className='shareIcon' />
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions className='shareIcon' />
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                    <button className="shareButton">Share</button>
                    </div>
                </div>
               
            </div>
        </div>
            )
}
