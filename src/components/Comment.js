import React from 'react';
import msToPostTime from '../utils/utilFunctions';
import '../styles/comment.scss';

export default function Comment({data}) {

    const {
        body,
        timestamp,
        likes,
        username,
        date,
    } = data;

    return (
        <div className='Comment'>
            <div className='comment-timestamp'>
                <p className='comment-text'>{body}</p>
                <div className="info-row">
                    <p className={"comment-author"}>from: {username}</p>
                    <p className='timestamp'>{msToPostTime( timestamp)}</p>
                    <p className='likes'>{`${likes.length} likes`}</p>
                </div>
            </div>

        </div>
    );
}