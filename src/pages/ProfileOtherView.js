import React from 'react';
import { Grid } from '@mantine/core';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import '../styles/profileotherview.scss';
import ProfileOtherViewModal from '../components/ProfileOtherViewModal';


export default function ProfilePage(props) {
    return (
        <Grid className='gridGroup'>
            <Grid.Col span={6}>
                <div className='profile-background'>
                    <div className='profile-title-container'>
                        <p className='title'>Personal Profile</p>
                    </div>
                    <ProfileOtherViewModal />
                    
                </div>
                </Grid.Col>
            
        </Grid>
    );
}