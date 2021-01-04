import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
import PhotoLibraryRoundedIcon from '@material-ui/icons/PhotoLibraryRounded';
import SentimentVerySatisfiedRoundedIcon from '@material-ui/icons/SentimentVerySatisfiedRounded';

function MessageSender() {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello');
    setInput('');
  };

  return (
    <div className="messageSender">
      <div className="messengerSender__top">
        <Avatar />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="What's on your mind, Jaber?"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messengerSender__bottom">
        <div className="messageSender__option">
          <VideoCallRoundedIcon style={{ color: 'red' }} />
          <h4>Live video</h4>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryRoundedIcon style={{ color: 'green' }} />
          <h4>Photo/Video</h4>
        </div>
        <div className="messageSender__option">
          <SentimentVerySatisfiedRoundedIcon style={{ color: 'orange' }} />
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
