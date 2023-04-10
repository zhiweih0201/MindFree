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
                      <Button className='contact-person-1-name' onClick={loadAnyOne}>Anonymous</Button>
                  </div>
                  <div className='contact-person-2'>
                      <Button className='contact-person-2-name' onClick={loadAnyTwo}>Anonymous</Button>
                  </div>
                  <div className='contact-person-3'>
                      <Button className='contact-person-3-name' onClick={loadAnyThree}>Anonymous</Button>
                  </div>
              </div>
          </Grid.Col>
      </Grid>

  );
}