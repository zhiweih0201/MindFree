import React, {useState} from 'react';
import msToPostTime from '../utils/utilFunctions';
import '../styles/comment.scss';
import {AiFillDelete, AiOutlineHeart} from "react-icons/ai";
import {connect} from "react-redux";
import {deleteComment, updateComment, updateThread} from "../services/thread-service";
import {MdModeEditOutline, MdOutlineCancelPresentation, MdSave} from "react-icons/md";

function Comment({data, user, threadId , getFeedData}) {

    const {
        body,
        timestamp,
        likes,
        username,
        _id,
    } = data;

    const [editForm, setEditForm] = useState({
        body: body
    })
    const [showEdit, setShowEdit] = useState(false)
    const deleteHandler =  async() => {

        const data = await deleteComment({
            userid: user._id,
            threadId: threadId,
            commentId: _id

        })
        console.log("results data",data)
        if(data.modifiedCount > 0){
            getFeedData()
        } else {
            console.log("comment delete fail")
        }
    }

    const editHandler = async (e) =>{
        e.preventDefault()
        const data = await updateComment({
            userid: user._id,
            threadId:threadId,
            commentId: _id,
            body: editForm.body,
        })
        console.log("edit update",data)
        if(data.acknowledged){
            getFeedData()
            setShowEdit(false)
        } else {
            console.log("update fail")
        }


    }


    const handleEditOnChange = e => {
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value,
        })
    }



    return (
        <div className='Comment'>
            <div className="header">
                <p className='timestamp'>{msToPostTime( timestamp)}</p>
            </div>
            <div className='comment-timestamp'>
                <p className='comment-text'>
                    {showEdit ?  <input type="text" name={"body"} onChange={handleEditOnChange} value={editForm.body}/> : <>{body}</>}


                </p>
                <div className="info-row">

                    {`${likes.length} likes `}<AiOutlineHeart/>

                        {username == user.username? <AiFillDelete onClick={deleteHandler}/> :""}

                        {(username == user.username && !showEdit ) ?  <MdModeEditOutline  cursor={"pointer"} onClick={()=>setShowEdit(!showEdit)}/> : ""}


                        {showEdit ? <><MdOutlineCancelPresentation onClick={()=>setShowEdit(!showEdit)}/>
                            <MdSave onClick={editHandler} /></>: "" }





                </div>
            </div>

        </div>
    );
}


function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(Comment)