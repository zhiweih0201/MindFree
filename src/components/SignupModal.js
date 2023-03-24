import React, { useState } from 'react';
import { TextInput, PasswordInput, Button } from '@mantine/core';
import '../styles/signupmodal.scss';
import AuthService from '../services/auth-service';
import { useNavigate } from "react-router-dom";

export default function SignupModal(props) {

    const [pennKey, setPennKey] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validationMessage, setValidationMessage] = useState('')
    const navigate = useNavigate();

    function loadLogin() {
        return navigate('/')
    }


    function signup() {
        new AuthService().signup({
            username: pennKey,
            password: password
        }).then((response)=> {
            console.log(response)
            setValidationMessage("")
            loadLogin()
        }).catch((err) => {
            console.log("err",err.response.data.message)
            //TODO set this once you know what error you are sending exactly in what situations
            setValidationMessage(err.response.data.message)
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
            <span style={{color:"red"}}>{validationMessage}</span>
            <Button onClick={signup} className='signin-button' color=''>
                Sign Up
            </Button>
        </div>
    );
}
