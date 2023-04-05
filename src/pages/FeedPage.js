import React, {useEffect, useState} from 'react';
import Post from '../components/Post';

import LeftNav from '../components/LeftNav'
import '../styles/feedpage.scss';
import {getThread, createThread} from '../services/thread-service'

import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {BsFillPlusSquareFill} from "react-icons/bs";


function FeedPage({user}) {
    //const dispatch = useDispatch()
    const [feed, setFeed]= useState(null)
    const [form, setForm] = useState({})
    const [showForm, setShowForm] = useState(["none"])
    const [showCreateForm , setShowCreateForm] = useState(false)
    const navigate = useNavigate();

    useEffect(()=>{
        if(user == undefined || user.alias == undefined){
            navigate('/')
        }
        getFeedData();
    }, [])


    const numLikes = 10;



    const getFeedData = async () => {
        const data = await getThread();
        console.log("feeddata", data, data.id)
        setFeed(data)

    }

    const createThreadHandler = async (e) => {
        e.preventDefault()
        console.log("sending", user._id,form.title, form.body)

        const data = await createThread({
            username: user.username,
            userId: user._id,
            title: form.title,
            body: form.body,
        })
        if(data){
            setShowCreateForm(false)
            setForm({})
            getFeedData();
        }

    }

    const handleOnChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }




    return (

        <div className='Thread'>
            <LeftNav/>
            <div className='right Feed'>
                <div className="controls">

                        <BsFillPlusSquareFill cursor={"pointer"} color={"#F3CD70"} fontSize={"40px"} onClick={()=> setShowCreateForm(true)}/>

                </div>
                {showCreateForm ? <div className={"createForm"}>
                    <div>
                        <h2>Create Thread</h2>

                        <form method="post" onSubmit={createThreadHandler}>
                        <fieldset>
                            <label htmlFor="" className={"peach"}>Title</label>
                            <input

                                type="text"
                                value={form.title}
                                name={"title"}
                                onChange={handleOnChange}
                            />
                        </fieldset>

                        <fieldset>
                            <label htmlFor="" className={"peach"}>Body</label>
                            <input
                                type="text"
                                value={form.body}
                                name={"body"}
                                onChange={handleOnChange}
                            />
                        </fieldset>
                            <fieldset className={"buttonRow"}>
                                <input type="submit" value={"create"}/>
                                <input type="button" onClick={()=>setShowCreateForm(false)} value={"close"}/>
                            </fieldset>

                    </form>
                    </div>
                </div> :""}
                {
                    feed && feed.map((f,i)=>{
                        return <Post key={f._id}
                                     data={f}
                                   getFeedData={getFeedData}/>
                    })
                }
                {/*<Post*/}
                {/*    key={"whatsd"}*/}
                {/*    timestamp={timestamp}*/}
                {/*    subject={subject}*/}
                {/*    author={"test"}*/}
                {/*    comments={comments}*/}
                {/*    num_likes={numLikes}*/}
                {/*    num_comments={comments.length}*/}
                {/*    >{post}*/}
                {/*</Post>*/}
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

    // let temp2 =  {
    //     _id: "641d1b53ac43892fedd74493",
    //     alias: "whatever2",
    //     username: "shin",
    //     password: "shin"
    // }

    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(FeedPage)