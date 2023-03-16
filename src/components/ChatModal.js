import rebutton from '../assets/icons8-return-48.png';
import { TextInput, PasswordInput, Button } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { storeUser } from '../redux/slices/authSlice';
import React, { useState } from 'react';
import '../styles/chatmodal.scss';
import TextField from "@mui/material/TextField";

export default function LoginModal(props) {

    const navigate = useNavigate();

    function loadHomepage() {
        return navigate('/homepage')
    }

    const [name, setName] = useState("");

    return (
        <div>
            <div className='profile-modal'>
                <Button>
                    <img className="rebutton" src={rebutton} alt="my image" onClick={loadHomepage} />
                </Button>
            </div>
            <div className="search">
                <TextInput
                    className='text-input'
                    placeholder='Enter Name'
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
        </div>

    );
}