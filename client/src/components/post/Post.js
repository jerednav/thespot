import React from 'react'
import './post.css'
import { MoreVert } from '@material-ui/icons'

export default function Post( {post} ) {
   

    return (
        <div className='post'>
             <div className="postWrapper">
                 <div className="postTop">
                     <div className="postTopLeft">
                         <img className='postProfileImg' src="/images/ace.jpeg" alt="" />
                         <span className="postUsername">Ace Navarro</span>
                         <span className="postDate"> 5 days ago</span>
                     </div>
                     <div className="postTopRight">
                         <MoreVert />
                     </div>
                 </div>
                 <div className="postCenter">
                     <span className="postText">Hey its my first post!</span>
                     <img className='postImg' src="images/ace.jpeg" alt="" />
                 </div>
                 <div className="postBottom">
                     <div className="postBottomLeft">
                         <img src="images/like.png" alt="" />
                         <img src="images/heart.png" alt="" />
                         <span className="postLikeCounter">32 people liked it!</span>
                     </div>
                     <div className="postBottomRight">
                         <span className="postCommentText">9 comments</span>
                     </div>
                 </div>
             </div>
            
        </div>
    )
}
