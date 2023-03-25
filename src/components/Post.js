import React, {useEffect, useState} from 'react';
import Collapsible from 'react-collapsible';
import Comment from './Comment';
import '../styles/feedpost.scss';
import msToPostTime from "../utils/utilFunctions";
import {addComment} from "../services/thread-service";
import {connect} from "react-redux";

function Post(props) {
    const [form, setForm] = useState({})
    const { 
        timestamp, 
        subject,
        comments,
        author,
        children,
        user,
        threadId,
        getFeedData
    } = props;

    const commentHandler = async (e) => {
        e.preventDefault()

        const data = await addComment({
            userId: user._id,
            username: user.username,
            body:form.body,
            threadId: threadId
        })
        //setForm({body:""})
        setForm({})
        getFeedData()

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
            <Collapsible trigger={
                <div>
                    <div className='header'>
                        <p className='subject'>{subject} <small style={{fontSize: "14px"}}>by {author}</small></p>
                        <p className='timestamp'>{msToPostTime(Date.now() - timestamp, timestamp)}</p>
                    </div>
                    <div className='post'>
                        {children}
                    </div>
                    <div className='likes-comments'>
                        <p>[Like]</p>
                        {/*<p className='likes'>{`${num_likes} likes`}</p>*/}
                        <p className='comments'>{`${comments.length} comments`}</p>
                    </div>
                </div>
            }>
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
        </>
    );

}

function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(Post)