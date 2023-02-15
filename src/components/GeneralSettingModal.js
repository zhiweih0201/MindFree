import React, { useState } from 'react';
import { TextInput, PasswordInput, Button } from '@mantine/core';
import '../styles/generalsettingmodal.scss';
import AuthService from '../services/auth-service'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { storeUser } from '../redux/slices/authSlice';
import rebutton from '../assets/icons8-return-48.png';
import generalimg from '../assets/icons8-slider-30.png';
import segmentimg from '../assets/icons8-polyline-24.png';


export default function GeneralSettingModal(props) {

    const navigate = useNavigate();

    function loadHomepage() {
        return navigate('/homepage')
    }

    function loadSetting() {
        return navigate('/setting')
    }

    return (
        <div>
            <div className='setting-modal'>
                <Button>
                    <img className="rebutton" src={rebutton} alt="my image" onClick={loadHomepage} />
                </Button>
            </div>
            <div className='setting-options'>
                <img className='generalimg' src={generalimg} />
                <Button className='general-setting-button' variant="contained" style={{ backgroundColor: "#d0f2ed" }}>
                    General Setting
                </Button>
                <img className='segmentimg' src={segmentimg} />
                <Button className='segment-setting-button' variant="contained" style={{ backgroundColor: "#d0f2ed" }}>
                    Segment Setting
                </Button>
                <Button className='return-setting-button' variant="contained" style={{ backgroundColor: "#d0f2ed" }} onClick={loadSetting}>
                    Return to Setting
                </Button>
            </div>

        </div>
    );
}