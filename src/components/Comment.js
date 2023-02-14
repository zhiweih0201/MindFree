import React from 'react';
import msToPostTime from '../utils/utilFunctions';
import '../styles/comment.scss';

export default function Comment(props) {

    const {
        comment,
        timestamp,
        likes
    } = props;

    return (
        <div className='Comment'>
            <div className='comment-timestamp'>
                <p className='comment-text'>{comment}</p>
                <p className='timestamp'>{msToPostTime(Date.now() - timestamp)}</p>
            </div>
            <div className='comment-likes'>
                <p className='likes'>{`${likes} likes`}</p>
            </div>
        </div>
    );
}