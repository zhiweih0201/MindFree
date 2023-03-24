import {Button} from "@mui/material";
import image_setting from "../image/WechatIMG217.jpeg";
import image_penn from "../image/UniversityofPennsylvania_FullLogo_RGB.jpg";
import React from "react";
import {useNavigate} from "react-router-dom";
import '../styles/leftNav.scss';
export default function LeftNav(){
    const navigate = useNavigate();

    function loadHomepage() {
        return navigate('/homepage')
    }
    function loadFeed() {
        return navigate('/feed')
    }

    function loadProfile() {
        return navigate('/profile')
    }


    return   <div className="leftNav">
        <div className="top">
            <div>

        <Button className="sign-in" style={{
            background: '#F3E0B5',
            color: '#FF996D',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: 26,
            textTransform: 'none',
            padding: 0,
            margin: 0
        }} //onClick={logoutHandler}
        >
            Log Out
        </Button>
        <Button className="feed"
                onClick={loadProfile}
                style={{
                    background: '#F3E0B5',
                    color: '#FF996D',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: 26,
                    textTransform: 'none',
                    padding: 0,
                    margin: 0
                }} >
            Profile
        </Button>
        <Button className="chats" style={{
            background: '#F3E0B5',
            color: '#FF996D',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: 26,
            textTransform: 'none',
            padding: 0,
            margin: 0
        }} onClick={loadHomepage}>
            Home
        </Button>
        <Button className="forum" style={{
            background: '#F3E0B5',
            color: '#FF996D',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: 26,
            textTransform: 'none',
            padding: 0,
            margin: 0
        }}>
            Chats
        </Button>
        <Button className="therapist" style={{
            background: '#F3E0B5',
            color: '#FF996D',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: 26,
            textTransform: 'none',
            padding: 0,
            margin: 0
        }} onClick={()=> navigate('/therapist')}>
            Therapists
        </Button>
            <Button> <img className="set-image" src={image_setting} alt="setting_image" width="53"
                          height="50" />
            </Button>
            </div>
        </div>
        <div className="bottom">

        <img
            className="penn-image"
            src={image_penn}
            alt="penn"
            width="126"
            height="40"
        />
        </div>
    </div>

}