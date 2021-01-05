import React, { useEffect, useState } from 'react';
import database from '../firebase';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    database.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
    ))
  }, [])

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map(post => (
        <Post
          key={post.id}
          image={post.data.image}
          message={post.data.message}
          timestamp={post.data.timestamp}
        />
      ))}


    </div>
  );
}

export default Feed;
