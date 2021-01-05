import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
import PhotoLibraryRoundedIcon from '@material-ui/icons/PhotoLibraryRounded';
import SentimentVerySatisfiedRoundedIcon from '@material-ui/icons/SentimentVerySatisfiedRounded';
import { useStateValue } from '../StateProvider';
import database from '../firebase';
import firebase from 'firebase';

function MessageSender() {
  const [input, setInput] = useState('');
  const [{ user }, dispatch] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    database.collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      image: 'https://cdn.dribbble.com/users/4188520/screenshots/14834753/media/ea85a1962bd66888038bb5af1a388260.png?compress=1&resize=1000x750',
    })
    setInput('');
  };

  return (
    <div className="messageSender">
      <div className="messengerSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder={`What's on your mind, ${user.displayName}?`}
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
          <PhotoLibraryRoundedIcon style={{ color: 'green' }}  />
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
