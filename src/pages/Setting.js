import React from 'react';
import SettingModal from '../components/SettingModal';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { Grid } from '@mantine/core';
import '../styles/setting.scss';

export default function Setting(props) {

    return (
        <Grid>
            <Grid.Col span={2}>
                <div className = 'background'>
                    <div className='setting-background'>
                        <div className='setting-title-container'>
                            <p className='title'>Setting</p>
                        </div>
                        <SettingModal />
                    
                    </div>
                </div>
                
            </Grid.Col>
            <Grid.Col span={8}>

            </Grid.Col>
        </Grid>
    );

}