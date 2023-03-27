import React, { useState } from 'react';
import { TextInput, PasswordInput, Button } from '@mantine/core';
import '../styles/settingmodal.scss';
import AuthService from '../services/auth-service'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { storeUser } from '../redux/slices/authSlice';
import rebutton from '../assets/icons8-return-48.png';
import generalimg from '../assets/icons8-slider-30.png';
import segmentimg from '../assets/icons8-polyline-24.png';


export default function SettingModal(props) {

    const navigate = useNavigate();

    function loadHomepage() {
        return navigate('/homepage')
    }

    function loadGeneral() {
        return navigate('/general-setting')
    }

    function loadSegment() {
        return navigate('/segment-setting')
    }

    return (
        <div>
            <div className=''>
                <Button>
                    <img className="" src={rebutton} alt="my image" onClick={loadHomepage} />
                </Button>
            </div>
            <div className=''>
                <img className='' src={generalimg} />
                <Button className='settingsBtn' variant="contained" style={{ backgroundColor: "#d0f2ed" }} onClick={loadGeneral}>
                    General Setting
                </Button><br/>
                <img className='' src={segmentimg} />
                <Button className='settingsBtn' variant="contained" style={{ backgroundColor: "#d0f2ed" }} onClick={loadSegment}>
                    Segment Setting
                </Button>
            </div>

        </div>
    );
}