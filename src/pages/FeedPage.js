import React from 'react';
import Post from '../components/Post';
import msToPostTime from '../utils/utilFunctions';
import LeftNav from '../components/LeftNav'
import banner from '../assets/mental_health.png';
import penn from '../assets/penn_logo.png';
import { Flex, Grid } from '@mantine/core';

import '../styles/feedpage.scss';
import image from "../image/WechatIMG215.jpeg";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import image_penn from "../image/UniversityofPennsylvania_FullLogo_RGB.jpg"
import image_setting from "../image/WechatIMG217.jpeg"

export default function FeedPage(props) {
    //const dispatch = useDispatch()

    // dummy data
    const timestamp = new Date('February 13, 2023 19:30:00-05:00');
    const subject = 'CIS 160 sucks';
    const post = 'I hate 160. I hate 160. I hate 160. I hate 160. I hate 160. I hate 160. I hate 160. I hate 160. I hate 160. I hate 160. I hate 160. v v I hate 160. I hate 160. I hate 160. I hate 160. I hate 160. I hate 160. I hate 160. I hate 160. I hate 160.';
    const comments = [
        {text: 'I totally agree!', timestamp: new Date('February 13, 2023 21:30:00-05:00'), likes: 4}, 
        {text: 'Cmon Rajiv is the best', timestamp: new Date('February 13, 2023 21:30:00-05:00'), likes: 10}, 
        {text: 'I have a midterm coming up and I am terrified', timestamp: new Date('February 13, 2023 21:30:00-05:00'), likes: 6}
    ];
    const numLikes = 10;
    const numComments = 3;



    
    //const logoutHandler = () => {
    //    //AuthService.logout()
    //    dispatch(storeUser(null))
    //    navigate('/')
    //}


    return (
        <div className='Thread'>
            <LeftNav/>
            <div className='right'>
                <Post
                    timestamp={msToPostTime(Date.now() - timestamp)}
                    subject={subject}
                    post={post}
                    comments={comments}
                    num_likes={numLikes}
                    num_comments={comments.length}
                    >
                </Post>
            </div>


        </div>
    );

}