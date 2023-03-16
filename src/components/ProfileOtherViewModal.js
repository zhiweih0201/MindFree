import React, { useState } from 'react';
import { TextInput, PasswordInput, Button } from '@mantine/core';
import '../styles/profileotherviewmodal.scss';
import AuthService from '../services/auth-service'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { storeUser } from '../redux/slices/authSlice';
import rebutton from '../assets/icons8-return-48.png';

export default function ProfileOtherViewModal(props) {

    const navigate = useNavigate();

    function loadHomepage() {
        return navigate('/homepage')
    }

    return (
        <div className='profile-modal'>
            <Button>
            <img className="rebutton" src={rebutton} alt="my image" onClick={loadHomepage} />
            </Button>
            
        </div>
    );
}