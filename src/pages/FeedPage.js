import React from 'react';
import Post from '../components/Post';
import msToPostTime from '../utils/utilFunctions';

import banner from '../assets/mental_health.png';
import penn from '../assets/penn_logo.png';
import { Flex, Grid } from '@mantine/core';
import '../styles/homepage.scss';
import image from "../image/WechatIMG215.jpeg";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import image_penn from "../image/UniversityofPennsylvania_FullLogo_RGB.jpg"
import image_setting from "../image/WechatIMG217.jpeg"

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
    const numLikes = 10;
    const numComments = 3;

    const navigate = useNavigate();

    function loadHomepage() {
      return navigate('/homepage')
    }
    function loadFeed() {
        return navigate('/feed')
    }

    
    return (
        <div className="Home">
            <div className='Post'>
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
            <div className="left-bar">
                <Button className="sign-in" style={{
                    background: '#F3E0B5',
                    color: '#FF996D',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: 26,
                    textTransform: 'none',
                    padding: 0,
                    margin: 0
                }}>
                    Log Out
                </Button>
                <Button className="feed" 
                    onClick={loadFeed}
                    style={{
                    background: '#F3E0B5',
                    color: '#FF996D',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: 26,
                    textTransform: 'none',
                    padding: 0,
                    margin: 0
                }}>
                    Profile
                </Button>
                <Button className="chats" style={{
                    background: '#F3E0B5',
                    color: '#FF996D',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: 26,
                    textTransform: 'none',
                    padding: 0,
                    margin: 0
                }}>
                    Home
                </Button>
                <Button className="forum" style={{
                    background: '#F3E0B5',
                    color: '#FF996D',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: 26,
                    textTransform: 'none',
                    padding: 0,
                    margin: 0
                }}>
                    Chats
                </Button>
                <Button className="therapist" style={{
                    background: '#F3E0B5',
                    color: '#FF996D',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: 26,
                    textTransform: 'none',
                    padding: 0,
                    margin: 0
                }}>
                    Therapists
                </Button>
                <Button> <img className="set-image" src={image_setting} alt="setting_image" width="53"
                        height="50" />
                </Button>
                    <img
                        className="penn-image"
                        src={image_penn}
                        alt="penn"
                        width="126"
                        height="40"
                    />
            </div>
        </div>






    );

}