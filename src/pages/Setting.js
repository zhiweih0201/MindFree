import React from 'react';
import SettingModal from '../components/SettingModal';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { Grid } from '@mantine/core';
import '../styles/setting.scss';
import imgBg from '../image/WechatIMG215.jpeg'
import rebutton from '../assets/icons8-return-48.png';

export default function Setting(props) {

    const navigate = useNavigate();

    function loadHomepage() {
        return navigate('/homepage')
    }


    return (<div className="row setting">
                <div className="left" 
                style={{
                    
              
                    backgroundImage: "url(" + { imgBg } + ")"
                
                }}
                
                
                >
                     <Button>
                    <img className="" src={rebutton} alt="my image" onClick={loadHomepage} />
                </Button>

        
                   
                
                </div>
                <div className='right'>
                    <h2>Security</h2>
                    <div className="round-box">
                    
                        <fieldset>
                            <label>question ?</label>
                            <select>
                                <option>option 1</option>
                                <option>option 2</option>
                            </select>
                        </fieldset>
                        <fieldset>
                            <label>question ?</label>
                            <select>
                                <option>option 1</option>
                                <option>option 2</option>
                            </select>
                        </fieldset>
                        <fieldset>
                            <label>question ?</label>
                            <select>
                                <option>option 1</option>
                                <option>option 2</option>
                            </select>
                        </fieldset>


                    </div>




                    <h2>Notification</h2>
                    <div className="round-box">
                    
                        <fieldset>
                            <label>question ?</label>
                            <select>
                                <option>option 1</option>
                                <option>option 2</option>
                            </select>
                        </fieldset>
                        <fieldset>
                            <label>question ?</label>
                            <select>
                                <option>option 1</option>
                                <option>option 2</option>
                            </select>
                        </fieldset>
                        <fieldset>
                            <label>question ?</label>
                            <select>
                                <option>option 1</option>
                                <option>option 2</option>
                            </select>
                        </fieldset>


                    </div>

                </div>
            </div>
    );

}