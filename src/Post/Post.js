import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar';

export const Post = ({userName, imageUrl, caption})=> {
    return(
        <div className='post'>
          <div className='post__header'>
           <Avatar
              className='post__avatar' 
              alt="Remy Sharp" 
              src="/static/images/avatar/1.jpg" 
            />
            <h3>{userName}</h3>
          </div>
          <img className='post__image' alt='post' src={imageUrl} />
          <h4 className='post__text'><strong>{userName}: </strong> {caption}</h4>
        </div>
    )
}