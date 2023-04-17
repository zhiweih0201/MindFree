import React, { useState, useEffect } from 'react';
import { Grid } from '@mantine/core';
import { BrowserRouter as Router, Switch, Route, Link, Routes, useNavigate } from 'react-router-dom';
import { TextInput, PasswordInput } from '@mantine/core';
import { Button } from '@mui/material';
import '../styles/chatAnyOne.scss';
import ChatModal from '../components/ChatModal';
import sendchat from '../assets/send chat.png';
import io from 'socket.io-client';
import '../styles/chat_style.scss';

const socket = io.connect('http://localhost:3002');
console.log(socket);

export default function ChatAnyOne(props) {
    const username = 'matt';
    const [content, setContent] = useState('');
    const [room, setRoom] = useState('cis_160_room');
    const [messages, setMessages] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        socket.emit('join_room', room);
    }, []);

    function loadAnyOne() {
        return navigate('/chatanyone')
    }

    function loadAnyTwo() {
        return navigate('/chatanytwo')
    }

    function loadAnyThree() {
        return navigate('/chatanythree')
    }

    const sendMessage = async () => {
        if (content !== '') {
            const messageObj = {
                room: room,
                message: content,
                time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
                author: username,
                num: messages.length
            }

            await socket.emit('send_message', messageObj);
            setMessages((l) => [...new Set([...l, messageObj])]);
        }
    }

    useEffect(() => {
        socket.on('receive_message', (data) => {
            setMessages((l) => [...new Set([...l, data])]);
        });
    }, [socket]);

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
                    {messages.map((m) => {
                        return ( 
                            <div className='message' id={m.num % 2 === 1 ? 'you' : 'other'}>
                                <div>
                                    <div className='message-content'>
                                        <p>{m.message}</p>
                                    </div>
                                    <div className='message-meta'>
                                        <p>{m.time}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
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
                        <img className="sendchat" src={sendchat} onClick={sendMessage} alt="my image" />
                    </Button>
                </div>
            </Grid.Col>

        </Grid>

    );
}