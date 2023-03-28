import React, {useEffect, useState} from 'react';
import Collapsible from 'react-collapsible';
import Comment from './Comment';
import '../styles/feedpost.scss';
import msToPostTime from "../utils/utilFunctions";
import {addComment, deleteThread} from "../services/thread-service";
import {connect} from "react-redux";
import {AiFillDelete, AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {IoIosArrowUp} from "react-icons/io";

function Post({data,  children, getFeedData, user}) {
    const [form, setForm] = useState({})
    const [open, setOpen ] = useState(false)
    //console.log("post",data)
    const { 
        timestamp, 
        title,
        comments,
        username,
        userId,
        likes,
        _id,
    } = data;

    const commentHandler = async (e) => {
        e.preventDefault()
        if(form.body === undefined || form.body.trim() === ""){
            console.log("Need body text")
            return
        }
        const data = await addComment({
            userId: user._id,
            username: user.username,
            body:form.body,
            threadId: _id
        })
        //setForm({body:""})
        setForm({})
        getFeedData()

    }

    const deleteHandler = async (e) =>{
        e.preventDefault()
        const data = await deleteThread({
            userid: user._id,
            threadId: _id
        })
        console.log(data.deletedCount)
        if(data.deletedCount > 0){
            getFeedData()
        } else {
            console.log("delete fail")
        }


    }


    const handleOnChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }




    //triggerDisabled={comments.length == 0 ? true : false}
    return (
        <>
            <div className="postBox">
                <div className='header' onClick={()=>setOpen(!open)}>
                    <p className='subject'>{title} <small style={{fontSize: "14px"}}></small></p>
                    <p className='timestamp'>{msToPostTime(timestamp)}</p>
                </div>
                <div className='post' onClick={()=>setOpen(!open)}>
                    {children}
                </div>
            <div>
                <div className='likes-comments'>


                    <p className='comments' onClick={()=>setOpen(!open)}>{`${comments.length} comments`}</p>
                    {/*<AiFillHeart/>*/}
                    <p className='likes'>{`${likes.length} likes `}<AiOutlineHeart/></p>

                    {username == user.username? <AiFillDelete onClick={deleteHandler}/> :""}
                </div>
            </div>
                    <Collapsible trigger={<></>} open={open}>
                {/* not impacting why we see the post 3 times... */}
                <div className='content-container'>
                    {comments.map((c) => <Comment data={c} />)}
                    <hr/>
                    <div className={"addCommentForm"}>
                        <form action="" onSubmit={commentHandler}>
                            <fieldset>
                                <input
                                    type="text"
                                    value={form.body === undefined? "": form.body }
                                    name={"body"}
                                    onChange={handleOnChange}
                                />
                            </fieldset>
                            <fieldset className={"row"}>
                                <input type="submit" value={"Add Comment"}/>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </Collapsible>
            </div>

        </>
    );

}

function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(Post)