import React from 'react';
import LoginModal from '../components/LoginModal';
import banner from '../assets/mental_health.png';
import penn from '../assets/penn_logo.png';
import { Grid } from '@mantine/core';
import '../styles/loginpage.scss';
// Declaration
import { redirect } from "react-router-dom";

export default function LoginPage(props) {

    function action() {
        return redirect('/signup')
    }

    action()
    return (
        <Grid>
            <Grid.Col span={4}>
                <div className='login-container'>
                    <p className='title'>MindFree</p>
                    <LoginModal className='login-modal' />
                </div>
            </Grid.Col>
            <Grid.Col span={8}>
                <img className='banner' src={banner}/>
            </Grid.Col>
        </Grid>
    );

}