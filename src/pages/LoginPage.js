import React from 'react';
import LoginModal from '../components/LoginModal';
import banner from '../assets/mental_health.png';
import penn from '../assets/penn_logo.png';
import { Grid } from '@mantine/core';
import '../styles/loginpage.scss';


export default function LoginPage(props) {
    return (
        <div className={"Login"}>
        <Grid>
            <Grid.Col span={4} className={"left"}>
                <div className='login-container'>
                    <p className='title'>MindFree</p>
                    <LoginModal className='login-modal' />
                </div>
            </Grid.Col>
            <Grid.Col span={8} className={"right"}>
                <img className='banner' src={banner}/>
            </Grid.Col>
        </Grid>
        </div>
    );

}