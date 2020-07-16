import React,{ useState, useEffect } from 'react';
import './App.css';
import { Post } from './Post/Post'
import { db } from  './Firebase'

function App() {
  const [ post, setPost] = useState([])
  console.log(post)

  useEffect(()=>{
    db.collection('post').onSnapshot(snapshot =>{
      setPost(snapshot.docs.map(doc => ({id:doc.id,posts: doc.data()})))
    })
  },[])

  return (
    <div className="App">
      <div className='app__header'>
        <img 
          className='app__headerImage'
          src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
          alt=''
        />
      </div>
      {post.map(({id, posts}) => {
        return(
          <Post key={id} userName={posts.userName} caption={posts.caption} imageUrl={posts.imageUrl}/>
        )
      })}
    </div>
  );
}

export default App;
