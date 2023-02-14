import React from 'react';
import banner from '../assets/mental_health.png';
import penn from '../assets/penn_logo.png';
import { Grid } from '@mantine/core';
import '../styles/homepage.scss';
import image from "../image/WechatIMG215.jpeg";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import image_penn from "../image/UniversityofPennsylvania_FullLogo_RGB.jpg"
import image_setting from "../image/WechatIMG217.jpeg"

export default function HomePage(props) {

  const navigate = useNavigate();
  
  function loadProfile() {
    return navigate('/profile')
  }

  return (
    <div className="Home">
      {/*<div style={{ backgroundImage:`url(${image})`, height:780, width:4000, left:1000, backgroundRepeat:"no-repeat", backgroundSize:"contain"}}> */}
      <div className="right-background">
        <div className="main-text">
          <p>
            MindFree
          </p>
        </div>
        <span className="explain-text">Unbothered. Moisturized. In My Lane. Focused. Flourishing.</span>
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
          Log out
        </Button>
        <Button className="feed" style={{
          background: '#F3E0B5',
          color: '#FF996D',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: 26,
          textTransform: 'none',
          padding: 0,
          margin: 0
        }} onClick={loadProfile}>
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
          Chats
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
          Forums
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