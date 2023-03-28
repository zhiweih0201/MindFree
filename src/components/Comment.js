import React from 'react';
import msToPostTime from '../utils/utilFunctions';
import '../styles/comment.scss';
import {AiFillDelete, AiOutlineHeart} from "react-icons/ai";
import {connect} from "react-redux";
import {deleteComment} from "../services/thread-service";

function Comment({data, user, threadId , getFeedData}) {

    const {
        body,
        timestamp,
        likes,
        username,
        _id,
    } = data;

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


    console.log("comment data:",data)
    return (
        <div className='Comment'>
            <div className="header">
                <p className='timestamp'>{msToPostTime( timestamp)}</p>
            </div>
            <div className='comment-timestamp'>
                <p className='comment-text'>{body}</p>
                <div className="info-row">
                    <p className='likes'>{`${likes.length} likes `}<AiOutlineHeart/></p>
                    <p>
                        {username == user.username? <AiFillDelete onClick={deleteHandler}/> :""}
                    </p>

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