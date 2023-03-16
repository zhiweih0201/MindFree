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
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';
import pic4 from '../assets/pic4.png';

export default function ProfilePage(props) {

    const navigate = useNavigate();

    function loadProfileOtherView() {
        return navigate('/profileotherview')
    }

    return (
        <Grid className='gridGroup'>
            <Grid.Col span={6}>
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
                        <Button className='other-profile' variant="contained" style={{ backgroundColor: "#F3CD70" }} onClick={loadProfileOtherView}>
                            Other View
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
            <Grid.Col span={6}>
                <div className='wrapper'>
                <div className='news'>
                    <h1>News</h1>
                    <div className="box box-request">
                        <div className='avatar'>

                        </div>
                        <div>Anonymous <small>wants to chat with you</small></div>
                        <button>Accepts</button>
                        <button>Decline</button>
                    </div>
                    <div className="box box-request">
                        <div className='avatar'>

                        </div>
                        <div>Anonymous <small>wants to chat with you</small></div>
                        <button>Accepts</button>
                        <button>Decline</button>
                    
                    </div>
                </div>
                <div className='post'>
                    <h1>Post</h1>
                    <div className="box box-post">
                        <div className='left'>
                        <div className='avatar2'>

                        </div>
                        </div>
                        <div className='right'>
                        <input type={"text"} placeholder="Tell your friends what you think..." />
                        <div className='button-row'>
                            <button>
                                <img src={pic1} />
                                Pictures</button>
                            <button><img src={pic2} />Videos</button>
                            <button><img src={pic3} />Schedule</button>
                            <button><img src={pic4} />Take Photo</button>
                        </div>
                        </div>

                    </div>
                    <div className="box box-feed">
                        <div className='grid'>
                            <div className='gridItem'>
                                <div className='date'>10<small>Sep</small></div>
                                <div className="icon icon1"></div>
                                <div className="mess">Wandered Around the city, the weather was so good...
Be in a good mood!!!</div>
                            </div>
                            <div className='gridItem'>
                                <div className='date'>15<small>Aug</small></div>
                                <div className="icon icon2"></div>
                                <div className="mess">Definitely fall in love with boba tea recently!!</div>
                            </div>
                            <div className='gridItem'>
                                <div className='date'>05<small>May</small></div>
                    
                                <div className="box">
                                CS160 has been so hard...
DM if you wanna help out or have any TIPs! Thanks!
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
                </div>
                </Grid.Col>
            
        </Grid>
    );
}