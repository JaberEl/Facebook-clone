import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__info">
          <h3>{username}</h3>
          {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
          <p>{timestamp}</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__options--top">
          <div className="post__option">
            <ThumbUpAltOutlinedIcon />
            <p>Like</p>
          </div>
          <div className="post__option">
            <ChatBubbleOutlineOutlinedIcon />
            <p>Comment</p>
          </div>
          <div className="post__option">
            <NearMeOutlinedIcon />
            <p>Share</p>
          </div>
        </div>
        <div className="post__options--bottom">
          <Avatar src={profilePic} />
          <form>
            <input type="text" placeholder="Write a comment" />
            <button>Button Hidden</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Post;
