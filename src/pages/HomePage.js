import React from 'react';

import '../styles/homepage.scss';

import { Route, Routes, useNavigate } from 'react-router-dom';

import { storeUser } from '../redux/slices/authSlice';
import { useDispatch } from 'react-redux';
import LeftNav from "../components/LeftNav";

export default function HomePage(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  function loadProfile() {
    return navigate('/profile')
  }

  function loadForums() {
    return navigate('/forums')
  }

  const logoutHandler = () => {
      //AuthService.logout()
      dispatch(storeUser(null))
      navigate('/')
  }

  return (
    <div className="Home">
      <LeftNav/>
      <div className="right right-background">
          <div>
            <div className="main-text">

                MindFree

            </div>
            <div className="explain-text">Unbothered. Moisturized. In My Lane. Focused. Flourishing.</div>
          </div>
      </div>

    </div>
  );

}