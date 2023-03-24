import React from 'react';
import Collapsible from 'react-collapsible';
import Comment from './Comment';
import '../styles/feedpost.scss';
import msToPostTime from "../utils/utilFunctions";

export default function Post(props) {

    const { 
        timestamp, 
        subject,
        comments,
        num_likes ,
        author,
        children
    } = props;

    return (

            <Collapsible trigger={
                <div>
                    <div className='header'>
                        <p className='subject'>{subject} <small style={{fontSize: "14px"}}>by {author}</small></p>
                        <p className='timestamp'>{msToPostTime(Date.now() - timestamp)}</p>
                    </div>
                    <div className='post'>
                        {children}
                    </div>
                    <div className='likes-comments'>
                        <p>[Like]</p>
                        {/*<p className='likes'>{`${num_likes} likes`}</p>*/}
                        <p className='comments'>{`${comments.length} comments`}</p>
                    </div>
                </div>
            }>
                {/* not impacting why we see the post 3 times... */}
                <div className='content-container'>
                    {comments.map((comment) => <Comment comment={comment.text} timestamp={comment.timestamp} likes={comment.likes}/>)}
                </div> 
            </Collapsible>

    );

}