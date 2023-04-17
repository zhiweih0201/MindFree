import React, { useState } from 'react';
import { Grid } from '@mantine/core';
import { BrowserRouter as Router, Switch, Route, Link, Routes, useNavigate } from 'react-router-dom';
import { TextInput, PasswordInput } from '@mantine/core';
import { Button } from '@mui/material';
import '../styles/chat.scss';
import ChatModal from '../components/ChatModal';
import sendchat from '../assets/send chat.png';


export default function ChatPage(props) {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  function loadAnyOne() {
    return navigate('/chatanyone')
  }

  function loadAnyTwo() {
    return navigate('/chatanytwo')
  }

  function loadAnyThree() {
    return navigate('/chatanythree')
  }

  return (
    <Grid className='gridGroup'>
      <Grid.Col span={4}>
        <div className='chat-background'>
          <div className='chat-title-container'>
            <p className='title'>Chats</p>
          </div>
          <ChatModal />
          <div className='contact-person-1'>
            <Button className='contact-person-1-name' style={{
              background: 'rgba(243, 224, 181, 0.6)',
              color: '#000000',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: 20,
              textTransform: 'none',
              padding: 0,
              margin: 0,
              textAlign: 'left',
              maxWidth: 150
            }} onClick={loadAnyOne}>CIS 160</Button>
          </div>
          <div className='contact-person-2'>
            <Button className='contact-person-2-name' style={{
              background: 'rgba(243, 224, 181, 0.6)',
              color: '#000000',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: 20,
              textTransform: 'none',
              padding: 0,
              margin: 0,
              textAlign: 'left',
              maxWidth: 150
            }} onClick={loadAnyTwo}>Anonymous</Button>
          </div>
          <div className='contact-person-3'>
            <Button className='contact-person-3-name' style={{
              background: 'rgba(243, 224, 181, 0.6)',
              color: '#000000',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: 20,
              textTransform: 'none',
              padding: 0,
              margin: 0,
              textAlign: 'left',
              maxWidth: 150
            }} onClick={loadAnyThree}>Anonymous</Button>
          </div>
        </div>
      </Grid.Col>
    </Grid>

  );
}