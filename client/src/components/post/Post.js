import React, { useState } from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img
              className='postProfileImg'
              src='Users.filter(u=>u.id === post.userId)[0].profilePicture}'
              alt=''
            />
            <span className='postUsername'>
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className='postDate'> {post.date}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post?.desc}</span>
          <img className='postImg' src={post.photo} alt='' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img src='images/like.png' alt='' onClick={likeHandler} />
            <img src='images/heart.png' alt='' onClick={likeHandler} />

            <span className='postLikeCounter'>{like} </span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{post.comments} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
