import React from 'react';
import SettingModal from '../components/SettingModal';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { Grid } from '@mantine/core';
import '../styles/setting.scss';
import rebutton from '../assets/icons8-return-48.png';
import generalimg from '../assets/icons8-slider-30.png';
import segmentimg from '../assets/icons8-polyline-24.png';

export default function Setting(props) {

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
        <Grid>
            <Grid.Col span={2}>
                <div className='background'>
                    <div className='setting-background'>
                        <div className='setting-title-container'>
                            <p className='title'>Setting</p>
                        </div>
                        <div className='setting-modal'>
                            <Button>
                                <img className="rebutton" src={rebutton} alt="my image" onClick={loadHomepage} />
                            </Button>
                        </div>
                        <div className='setting-options'>
                            <img className='generalimg' src={generalimg} />
                            <Button className='general-setting-button' variant="contained" style={{ backgroundColor: "#d0f2ed" }} onClick={loadGeneral}>
                                General Setting
                            </Button>
                            <img className='segmentimg' src={segmentimg} />
                            <Button className='segment-setting-button' variant="contained" style={{ backgroundColor: "#d0f2ed" }} onClick={loadSegment}>
                                Segment Setting
                            </Button>
                        </div>


                    </div>
                </div>

            </Grid.Col>
            <Grid.Col span={8}>

            </Grid.Col>
        </Grid>
    );

}