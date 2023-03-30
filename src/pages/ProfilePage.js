import React, {useEffect, useState} from 'react';

import { Route, Routes, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import '../styles/profilepage.scss';
import ProfileModal from '../components/ProfileModal';
import flower from '../assets/WechatIMG106.jpeg';
import profilepic from '../assets/WechatIMG119.jpeg';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';
import pic4 from '../assets/pic4.png';
import {connect} from "react-redux";
import {createPost, getPost} from "../services/post-service";
import {getProfile, createProfile, updateProfile} from "../services/profile-service";
import {getThreadById} from "../services/thread-service";
import {MdModeEditOutline} from "react-icons/md";

function ProfilePage({user}) {

    const [postData, setPostData] = useState(null);
    const [profileData, setProfileData] = useState(null);
    const [threadData, setThreadData] = useState(null)
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const [form, setForm] = useState({})
    const [showForm, setShowForm] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false);

    useEffect(()=>{
        console.log("do i have user?", user)
        if(user == undefined || user.alias == undefined){
            navigate('/')
        }
        getPostData()
        getProfileData()
        getThreadbyIdData()
    },[])

    const getPostData = async () => {
        const data = await getPost(user._id);
        setPostData(data)

    }

    const getThreadbyIdData = async () => {
        const data = await getThreadById(user._id);
        console.log("thread data", data)
        setThreadData(data);
    }

    const getProfileData = async () =>{
        const data = await getProfile(user._id);
        setProfileData(data)
        if(data != null){
            setForm({
                year:  data.year,
                major:  data.major,
                personalText: data.personalText
            })
        } else {
            setShowForm(true)
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
        console.log("check?", profileData._id)

        try {
            if(profileData == undefined) {
                const data = await createProfile({
                    userId: user._id,
                    year:  e.target.year.value,
                    major:  e.target.major.value,
                    personalText: e.target.personalText.value
                })
                setForm({})
            } else {
                console.log("updating")
                const data = await updateProfile({
                    profileId: profileData._id,
                    userId: user._id,
                    year:  e.target.year.value,
                    major:  e.target.major.value,
                    personalText: e.target.personalText.value
                })
                if(data){
                    setShowForm(false)
                    getProfileData()
                }


            }

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

    const editHandler = () => {
        console.log("click")
        //setShowEditForm(true)
        setShowForm(true)

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
                            <div className="profile-flower">
                                <img className='flower' src={flower} />
                            </div>
                            <div className='profile-container'>

                                {profileData != null && showForm == false ?<>
                                    <p className='school'>School: University of Pennsylvania</p>
                                    <p className='major'>Major/Concentration: {profileData.major}</p>
                                    <p className='year'>Year of Study:  {profileData.year}</p>
                                    <p className='personal-text'> {profileData.personalText}</p>
                                    <p className={"edit"}>
                                        <MdModeEditOutline color={"#FF996D"} cursor={"pointer"} onClick={editHandler}/>
                                    </p>

                                </> : ""}
                                {
                                    showForm ?  <div>
                                        
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
                                                <label htmlFor="" className={"peach"}>Status</label>
                                                <input

                                                    type="text"
                                                    value={form.personalText}
                                                    name={"personalText"}
                                                    onChange={handleOnChange}
                                                />
                                            </fieldset>
                                            <input type="hidden" name={"id"} value={user._id}/>
                                            <fieldset>
                                                <input className='create-button' type="submit" value={profileData?"edit": "create"}/>
                                            </fieldset>
                                        </form>
                                    </div> : ""
                                }





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
                                {
                                    threadData && threadData.map((t)=>{
                                        return <p>{t.title}</p>
                                    })
                                }
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
                    <h1>Diary</h1>
                    <div className="box box-post">
                        <div className='left'>
                        <div className='avatar2'>

                        </div>
                        </div>
                        <div className='right'>
                        <input type={"text"} onChange={(e)=>setInputValue(e.target.value)} value={inputValue} placeholder="Tell us what you think..." />
                        <div className='button-row'>
                            <button onClick={createPostHandler}><img src={pic3} />#Anxiety</button>
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
    //console.log("mstp:", state, state.auth.user)

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