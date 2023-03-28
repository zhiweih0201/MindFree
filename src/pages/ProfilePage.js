import React, {useEffect, useState} from 'react';
import { Grid } from '@mantine/core';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import '../styles/profilepage.scss';
import ProfileModal from '../components/ProfileModal';
import computer from '../assets/WechatIMG109.jpeg';
import technology from '../assets/WechatIMG108.jpeg';
import flower from '../assets/WechatIMG106.jpeg';
import profilepic from '../assets/WechatIMG119.jpeg';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';
import pic4 from '../assets/pic4.png';
import {connect} from "react-redux";
import {createPost, getPost} from "../services/post-service";
import {getProfile, createProfile} from "../services/profile-service";

function ProfilePage({user}) {

    const [postData, setPostData] = useState(null);
    const [profileData, setProfileData] = useState(null);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const [form, setForm] = useState({})
    const [showForm, setShowForm] = useState(["none"])

    useEffect(()=>{
        console.log("do i have user?", user)
        if(user == undefined || user.alias == undefined){
            navigate('/')
        }
        getPostData()
        getProfileData()
    },[])

    const getPostData = async () => {
        const data = await getPost(user._id);
        setPostData(data)

    }

    const getProfileData = async () =>{
        const data = await getProfile(user._id);
        setProfileData(data)
        if(data != null){
        } else {
            setShowForm("block")
        }
    }


    const createPostHandler = async () => {

        const timestamp = new Date().getTime();
        const date = new Date(timestamp);

        const data = await createPost({
            userId: user._id,
            body: inputValue,
            date: `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`,
            timestamp: timestamp
        })
        if(data){
            setInputValue("")
            getPostData()
        }

    }

    const createProfileHandler = async e => {
        e.preventDefault()


        try {
            const data = await createProfile({
                userId: user._id,
                year:  e.target.year.value,
                major:  e.target.major.value,
                personalText: e.target.personalText.value
            })
            setForm({})
            getProfileData()

        } catch (error) {
            console.log(error)
            setForm({})
        }
    }


    const handleOnChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }





    return (
       <div className={"flex"}>
                <div className='profile-background left'>
                    <ProfileModal  />
                    <div className='profile-title-container'>
                        <p className='title'>Personal Profile  </p>

                    </div>
                    <div className="profileBox">
                        <div>
                            <div className='profile-photo'>
                                <img className='profilepic' src={profilepic} />
                            </div>
                            <div className='profile-container'>
                                <img className='flower' src={flower} />
                                {profileData != null?<>
                                    <p className='school'>School: University of Pennsylvania</p>
                                    <p className='major'>Major/Concentration: {profileData.major}</p>
                                    <p className='year'>Year of Study:  {profileData.year}</p>
                                    <p className='personal-text'> {profileData.personalText}</p>

                                </> : <>
                                    <div style={{display:showForm}} >
                                        <br/><br/><br/>
                                        <h2 className={"center peach"}>Please Complete Profile</h2>
                                        <form id={"profileForm"} method="post" onSubmit={createProfileHandler}>

                                            <fieldset>
                                                <label htmlFor="" className={"peach"}>Major</label>
                                                <input

                                                    type="text"
                                                    value={form.major}
                                                    name={"major"}
                                                    onChange={handleOnChange}
                                                />
                                            </fieldset>
                                            <fieldset>
                                                <label htmlFor="" className={"peach"}>Year</label>
                                                <input

                                                    type="text"
                                                    value={form.year}
                                                    name={"year"}
                                                    onChange={handleOnChange}
                                                />
                                            </fieldset>
                                            <fieldset>
                                                <label htmlFor="" className={"peach"}>Personal Text</label>
                                                <input

                                                    type="text"
                                                    value={form.personalText}
                                                    name={"personalText"}
                                                    onChange={handleOnChange}
                                                />
                                            </fieldset>
                                            <input type="hidden" name={"id"} value={user._id}/>
                                            <fieldset>
                                                <input className='create-button' type="submit" value={"create"}/>
                                            </fieldset>
                                        </form>
                                    </div>

                                </>}



                            </div>
                            <div className='profile-tags'>
                                <p className='tags'>Tags</p>
                                <Button className='tag-button-1' variant="contained" style={{ backgroundColor: "#F3CD70" }}>
                                    #Mental Health
                                </Button>
                                <Button className='tag-button-2' variant="contained" style={{ backgroundColor: "#F3CD70" }}>
                                    #CIS 160
                                </Button>
                                <Button className='tag-button-3' variant="contained" style={{ backgroundColor: "#F3CD70" }}>
                                    #Conseling
                                </Button>
                            </div>

                            <div className='profile-topics'>
                                <p className='topics'>Topics</p>
                                <img className='computer' src={computer} />
                                <img className='technology' src={technology} />
                             
                            
                            </div>
                        </div>



                    </div>



                    </div>


                <div className='right wrapper'>
                <div className='news'>
                    <h1>News</h1>
                    <div className="box box-request">
                        <div className='avatar'>

                        </div>
                        <div>Anonymous <small>wants to chat with you</small></div>
                        <button>Accepts</button>
                        <button>Decline</button>
                    </div>
                    <div className="box box-request">
                        <div className='avatar'>

                        </div>
                        <div>Anonymous <small>wants to chat with you</small></div>
                        <button>Accepts</button>
                        <button>Decline</button>
                    
                    </div>
                </div>
                <div className='post'>
                    <h1>Post</h1>
                    <div className="box box-post">
                        <div className='left'>
                        <div className='avatar2'>

                        </div>
                        </div>
                        <div className='right'>
                        <input type={"text"} onChange={(e)=>setInputValue(e.target.value)} value={inputValue} placeholder="Tell your friends what you think..." />
                        <div className='button-row'>
                            <button onClick={createPostHandler}><img src={pic3} />Text</button>
                            <button>
                                <img src={pic1} />
                                #CIS160</button>
                            <button><img src={pic2} />#ECON101</button>

                            <button><img src={pic4} />#Failing</button>
                        </div>
                        </div>

                      

                    </div>
                    <div className="box box-feed">
                        <div className='grid'>

                            {
                                postData && postData.map((d,i)=>{

                                    let monthIndex = parseInt(d.date.split("/")[0]) - 1;



                                    return <div className='gridItem' key={i + "p"}>
                                        <div className='date'>{d.date.split("/")[1]}
                                            <small>{monthNames[monthIndex]}</small></div>
                                        <div className="icon icon1"></div>
                                        <div className="mess">{d.body}</div>
                                    </div>
                                })
                            }

                            {
                                 postData == null ? "No Posts": ""
                            }


                        </div>
                    </div>
                </div>
                </div>
       </div>

    );
}

function mapStateToProps(state) {
    console.log("mstp:", state, state.auth.user)

    let temp =  {
        _id: "641d0a1238cb3eb0ce4d608f",
        alias: "whatever",
        username: "artart",
        password: "artart"
    }

    let temp2 =  {
        _id: "641d1b53ac43892fedd74493",
        alias: "whatever2",
        username: "shin",
        password: "shin"
    }

    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(ProfilePage)