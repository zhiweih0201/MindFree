import React, { useState } from 'react';
import { Grid } from '@mantine/core';
import { BrowserRouter as Router, Switch, Route, Link, Routes, useNavigate } from 'react-router-dom';
import { TextInput, PasswordInput } from '@mantine/core';
import { Button } from '@mui/material';
import '../styles/chatAnyOne.scss';
import ChatModal from '../components/ChatModal';
import sendchat from '../assets/send chat.png';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3002');
console.log(socket);

export default function ChatAnyOne(props) {
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
                    <div className='contact-person-1-background-1'>
                        <Button className='contact-person-1-name' style={{
                            background: '#CEC8C8',
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
                        }} onClick={loadAnyOne}>Anonymous</Button>
                    </div>
                    <div className='contact-person-2-background-1'>
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
                    <div className='contact-person-3-background-1'>
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