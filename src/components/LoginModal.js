import React, { useState } from 'react';
import { TextInput, PasswordInput, Button } from '@mantine/core';
import '../styles/loginmodal.scss';
import AuthService from '../services/auth-service';

export default function LoginModal(props) {

    const [pennKey, setPennKey] = useState('');
    const [password, setPassword] = useState('');


    function login() {
        new AuthService().login({
            username: pennKey,
            password: password
        })
    }

    return (
        <div className='login-modal'>
            <div className='text-inputs'>
                <TextInput
                    className='text-input'
                    placeholder='Enter your PennKey'
                    label='PennKey'
                    onChange={(e)=>setPennKey(e.target.value)}
                />
                <PasswordInput
                    className='text-input'
                    placeholder='Enter your Password'
                    label='Password'
                    onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <Button onClick={login} className='signin-button' color=''>
                Sign In
            </Button>
            <p className='signup-text'>Don't have an account? Sign up</p>
        </div>
    );
}
