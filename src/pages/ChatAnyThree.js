import React, { useState } from 'react';
import { Grid } from '@mantine/core';
import { BrowserRouter as Router, Switch, Route, Link, Routes, useNavigate } from 'react-router-dom';
import { TextInput, PasswordInput } from '@mantine/core';
import { Button } from '@mui/material';
import '../styles/chatAnyThree.scss';
import ChatModal from '../components/ChatModal';
import sendchat from '../assets/send chat.png';


export default function ChatAnyThree(props) {
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    return (
      <Grid className='gridGroup'>
          <Grid.Col span={4}>
              <div className='chat-background'>
                  <div className='chat-title-container'>
                      <p className='title'>Chats</p>
                  </div>
                  <ChatModal />
                  <div className='contact-person-1-background-3'>
                      <p className='contact-person-1-name'>Anonymous</p>
                  </div>
                  <div className='contact-person-2-background-3'>
                      <p className='contact-person-2-name'>Anonymous</p>
                  </div>
                  <div className='contact-person-3-background-3'>
                      <p className='contact-person-3-name'>Anonymous</p>
                  </div>
              </div>
          </Grid.Col>
          <Grid.Col span={8}>
              <div className='chat-title'>
                  <p className='chat-person-name'>Anonymous</p>
              </div>
              <div className='chat-page'>

              </div>
              <div className='chat-enter-text'>
                  <div className='chatbox-enter-content'>
                      <TextInput
                          className='text-input-box'
                          placeholder='Enter Content'
                          onChange={(e) => setContent(e.target.value)}
                      />
                  </div>
                  <Button>
                      <img className="sendchat" src={sendchat} alt="my image" />
                  </Button>
              </div>
          </Grid.Col>

      </Grid>

  );
}