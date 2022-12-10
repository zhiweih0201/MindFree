import React, { useState } from 'react';
import { TextInput, PasswordInput, Button } from '@mantine/core';
import '../styles/loginmodal.scss';

export default function LoginModal(props) {

    const [pennKey, setPennKey] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='login-modal'>
            <div className='text-inputs'>
                <TextInput
                    className='text-input'
                    placeholder='Enter your PennKey'
                    label='PennKey'
                />
                <PasswordInput
                    className='text-input'
                    placeholder='Enter your Password'
                    label='Password'
                />
            </div>
            <Button className='signin-button' color=''>
                Sign In
            </Button>
            <p className='signup-text'>Don't have an account? Sign up</p>
        </div>
    );
}
