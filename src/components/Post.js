import React from 'react';
import Collapsible from 'react-collapsible';
import Comment from './Comment';
import '../styles/feedpost.scss';

export default function Post(props) {

    const { 
        timestamp, 
        subject, 
        post, 
        comments, 
        num_comments, 
        num_likes 
    } = props;

    return (
        <div className='Feed'>
            <Collapsible trigger={
                <div>
                    <div className='header'>
                        <p className='subject'>{subject}</p>
                        <p className='timestamp'>{timestamp}</p>
                    </div>
                    <div className='post'>
                        {post}
                    </div>
                    <div className='likes-comments'>
                        <p className='likes'>{`${num_likes} likes`}</p>
                        <p className='comments'>{`${num_comments} comments`}</p>
                    </div>
                </div>
            }>
                {/* not impacting why we see the post 3 times... */}
                <div className='content-container'>
                    {comments.map((comment) => <Comment comment={comment.text} timestamp={comment.timestamp} likes={comment.likes}/>)}
                </div> 
            </Collapsible>
        </div>
    );

}