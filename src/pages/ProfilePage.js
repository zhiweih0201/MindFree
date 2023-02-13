import React from 'react';
import { Grid } from '@mantine/core';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import '../styles/profilepage.scss';
import ProfileModal from '../components/ProfileModal';
import computer from '../assets/WechatIMG109.jpeg';
import technology from '../assets/WechatIMG108.jpeg';
import flower from '../assets/WechatIMG106.jpeg';
import profilepic from '../assets/WechatIMG119.jpeg';


export default function ProfilePage(props) {
    return (
        <Grid>
            <Grid.Col span={4}>
                <div className='profile-background'>
                    <div className='profile-title-container'>
                        <p className='title'>Personal Profile</p>
                    </div>
                    <ProfileModal />
                    <div className='profile-photo'>
                        <img className='profilepic' src={profilepic} />
                    </div>
                    <div className='profile-container'>
                        <img className='flower' src={flower} />
                        <p className='follower'>Followers</p>
                        <p className='following'>Following</p>
                        <p className='person'>Anonymous Flower</p>
                        <p className='school'>School:</p>
                        <p className='major'>Major/Concentration:</p>
                        <p className='year'>Year of Study:</p>
                        <p className='personal-text'>I dream to make the world a better place!</p>
                        <Button className='profile-button' variant="contained" style={{ backgroundColor: "#FFCC4D" }}>
                            My Profile
                        </Button>
                    </div>
                    <div className='profile-tags'>
                        <p className='tags'>Tags</p>
                        <Button className='tag-button-1' variant="contained" style={{ backgroundColor: "#F3CD70" }}>
                            #Mental Health
                        </Button>
                        <Button className='tag-button-2' variant="contained" style={{ backgroundColor: "#F3CD70" }}>
                            #CIS 160
                        </Button>
                        <Button className='tag-button-3' variant="contained" style={{ backgroundColor: "#F3CD70" }}>
                            #Conseling
                        </Button>
                    </div>
                    <div className='profile-topics'>
                        <p className='topics'>Topics</p>
                        <img className='computer' src={computer} />
                        <img className='technology' src={technology} />
                        <p className='computer-text'>CS Course Forum</p>
                        <p className='computer-friends'>30 your friends are in</p>
                        <p className='technology-text'>Mental Conseling Forum</p>
                        <p className='technology-friends'>20 your friends are in</p>
                    </div>
                </div>
            </Grid.Col>
        </Grid>
    );
}