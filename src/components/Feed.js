import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic="https://cdn.dribbble.com/users/4188520/avatars/normal/9900dca40da904199c378fc64ed92c87.jpg?1580805196"
        image="https://cdn.dribbble.com/users/4188520/screenshots/12125510/media/1178c7c436fec35675ff9dd97784f7c0.jpg?compress=1&resize=400x300"
        message="This is a Fortnite Mobile Application"
        username="Jaber ELFERKH"
        timestamp="timestamp"
      />
      <Post
        profilePic="https://mir-s3-cdn-cf.behance.net/projects/404/d6991d86437115.Y3JvcCw4MDgsNjMyLDAsMA.jpg"
        message="This is a Fortnite Mobile Application"
        username="Jaber ELFERKH"
        timestamp="timestamp"
      />
    </div>
  );
}

export default Feed;
