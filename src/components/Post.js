import React, {useEffect, useState} from 'react';
import Collapsible from 'react-collapsible';
import Comment from './Comment';
import '../styles/feedpost.scss';
import msToPostTime from "../utils/utilFunctions";
import {addComment, deleteThread, updateFlag, updateLike, updateThread} from "../services/thread-service";
import {connect} from "react-redux";
import {AiFillDelete, AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {IoIosArrowUp} from "react-icons/io";
import {MdModeEditOutline, MdOutlineCancelPresentation, MdSave} from "react-icons/md";
import {BsFlag, BsFlagFill} from "react-icons/bs";
import {ImProfile} from "react-icons/im";

function Post({data,  children, getFeedData, user}) {
    const {
        timestamp,
        title,
        comments,
        username,
        userId,
        body,
        likes,
        _id,
        therapist, 
        flag
    } = data;
    const [form, setForm] = useState({})
    const [editForm, setEditForm] = useState({
        title: title,
        body: body
    })
    const [showEdit, setShowEdit] = useState(false)

    const [open, setOpen ] = useState(false)
    //console.log("post",data)


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
            threadId: _id,
            therapist: user?.therapist
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

    const editHandler = async (e) =>{
        e.preventDefault()
        const data = await updateThread({
            userid: user._id,
            threadId: _id,
            title: editForm.title,
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

    const likeHandler = async () => {
        const data = await updateLike({
            userId: user._id,
            threadId: _id,
        })
        getFeedData()
    }

    const handleOnChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleEditOnChange = e => {
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value,
        })
    }

    const flagHandler = async () =>{
        console.log("flag")
        const data = await updateFlag({
            threadId: _id
        })

        //refresh the page
        getFeedData()


    }




    //triggerDisabled={comments.length == 0 ? true : false}
    return (
        <>
            <div className={therapist? "therapistPost postBox":"postBox"}>
                <div className="headerContainer">
                    <div className='header' >
                        <p className='subject'>
                        {
                            showEdit ?
                                <input type="text" name={"title"} onChange={handleEditOnChange} value={editForm.title}/> : <>{title} <small style={{fontSize: "14px"}}></small></>
                        }
                            {therapist?<span><small>Therapist</small></span>: ""}
                        </p>


                        <p className='timestamp'>  {msToPostTime(timestamp)}</p>
                    </div>
                    <div className='post' >
                        {showEdit ?  <input type="text" name={"body"} onChange={handleEditOnChange} value={editForm.body}/> : <>{body}</>}
                    </div>

                    <div>
                    <div className='likes-comments'>
                        <p className='comments' onClick={()=>setOpen(!open)}>{`${comments.length} comments`}</p>
                        {/*<AiFillHeart/>*/}
                        <p className='likes'>{`${likes.length} likes `}
                            {likes.includes(user._id) ? <AiFillHeart onClick={likeHandler}/>:     <AiOutlineHeart onClick={likeHandler}/>}
                        </p>
                        { flag? <BsFlagFill ml={"5px"} onClick={flagHandler} />:
                            <BsFlag ml={"5px"} onClick={flagHandler}/>
                        
                        }
                        
                        {username == user.username? <><
                            AiFillDelete onClick={deleteHandler}/>
                           </>:""}
                        {(username == user.username && !showEdit ) ?  <MdModeEditOutline  cursor={"pointer"} onClick={()=>setShowEdit(!showEdit)}/> : ""}
                        {showEdit ? <><MdOutlineCancelPresentation onClick={()=>setShowEdit(!showEdit)}/>
                            <MdSave onClick={editHandler} /></>: "" }
                    </div>
                </div>
                </div>
                    <Collapsible trigger={<></>} open={open}>
                {/* not impacting why we see the post 3 times... */}
                <div className='content-container'>
                    {comments.map((c,i) => <Comment key={i + c.timestamp} getFeedData={getFeedData} data={c} threadId={_id} />)}

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
                            <fieldset className={"row alignRight"}>
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