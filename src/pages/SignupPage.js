import React from 'react';
import SignupModal from '../components/SignupModal';
import banner from '../assets/mental_health.png';
import penn from '../assets/penn_logo.png';
import { Grid } from '@mantine/core';
import '../styles/signuppage.scss';

export default function SignupPage(props) {

    return (
        <Grid>
            <Grid.Col span={4}>
                <div className='signup-container'>
                    <p className='title'>MindFree</p>
                    <SignupModal className='signup-modal' />
                </div>
            </Grid.Col>
            <Grid.Col span={8}>
                <img className='banner' src={banner}/>
            </Grid.Col>
        </Grid>
    );

}