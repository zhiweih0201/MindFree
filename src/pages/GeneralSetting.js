import React from 'react';
import GeneralSettingModal from '../components/GeneralSettingModal';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { Grid } from '@mantine/core';
import '../styles/setting.scss';

export default function GeneralSetting(props) {

    return (
        <div className="generalSetting">
            <div className='right-side-background'>
                
                <p className='notification'>Notifications</p>
            </div>
            <div className='setting-background'>
                <div className='setting-title-container'>
                    <p className='title'>Setting</p>
                </div>
                
            </div>

        </div>

    );

}