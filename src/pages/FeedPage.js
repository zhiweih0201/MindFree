import React from 'react';
import Post from '../components/Post';
import msToPostTime from '../utils/utilFunctions';

export default function FeedPage(props) {

    // dummy data
    const timestamp = new Date('February 13, 2023 19:30:00-05:00');
    const subject = 'CIS 160 sucks';
    const post = 'I hate 160. I hate 160. I hate 160. I hate 160. I hate 160. I hate 160. I hate 160. I hate 160. I hate 160. I hate 160. I hate 160. v v I hate 160. I hate 160. I hate 160. I hate 160. I hate 160. I hate 160. I hate 160. I hate 160. I hate 160.';
    const comments = [
        {text: 'I totally agree!', timestamp: new Date('February 13, 2023 21:30:00-05:00'), likes: 4}, 
        {text: 'Cmon Rajiv is the best', timestamp: new Date('February 13, 2023 21:30:00-05:00'), likes: 10}, 
        {text: 'I have a midterm coming up and I am terrified', timestamp: new Date('February 13, 2023 21:30:00-05:00'), likes: 6}
    ];

    return (
        <div className='Feed'>
            <Post
                timestamp={msToPostTime(Date.now() - timestamp)}
                subject={subject}
                post={post}
                comments={comments}
            />
        </div>
    );

}