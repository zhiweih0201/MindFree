import React, { useState } from 'react';
import { TextInput, PasswordInput, Button } from '@mantine/core';
import '../styles/loginmodal.scss';
import AuthService from '../services/auth-service'

import { useNavigate } from "react-router-dom";


export default function LoginModal(props) {


    const navigate = useNavigate();
    const [pennKey, setPennKey] = useState('');
    const [password, setPassword] = useState('');
    const [validationMessage, setValidationMessage] = useState('')


    function loadHomepage() {
        return navigate('/homepage')
    }

    function login() {
        new AuthService().login({
            username: pennKey,
            password: password
        }).then((loginResponse) => {
            setValidationMessage("")
            loadHomepage();
        }).catch((err) => {
            console.log(err)
            setValidationMessage(err.response.data)
        })
    }

    return (
        <div className='login-modal'>
            <b>{validationMessage}</b>
            <div className='text-inputs'>
                <TextInput
                    className='text-input'
                    placeholder='Enter your PennKey'
                    label='PennKey'
                    onChange={(e) => setPennKey(e.target.value)}
                />
                <PasswordInput
                    className='text-input'
                    placeholder='Enter your Password'
                    label='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <Button onClick={login} className='signin-button' color=''>
                Sign In
            </Button>
            <a href={`/signup`}><p className='signup-text'>Don't have an account? Sign up</p></a>
        </div>
    );
}
