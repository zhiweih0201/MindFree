import React, { useState } from 'react';
import { TextInput, PasswordInput, Button } from '@mantine/core';
import '../styles/signupmodal.scss';
import AuthService from '../services/auth-service';

export default function SignupModal(props) {

    const [pennKey, setPennKey] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function signup() {
        new AuthService().signup({
            username: pennKey,
            password: password
        }).then((response)=> {
            console.log(response)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className='signup-modal'>
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
                <PasswordInput
                    className='text-input'
                    placeholder='Re-enter your Password'
                    label='Confirm Password'
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                />
            </div>
            <Button onClick={signup} className='signin-button' color=''>
                Sign Up
            </Button>
        </div>
    );
}
