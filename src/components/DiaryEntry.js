
import {AiFillDelete} from "react-icons/ai";
import {MdModeEditOutline, MdOutlineCancelPresentation, MdSave} from "react-icons/md";
import {deleteThread, getThreadById, updateThread} from "../services/thread-service";
import React, {useState} from "react";
import {deletePost, updatePost} from "../services/post-service";

export default function DiaryEntry ({data, i, getPostData}) {

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    //const [showEditForm, setShowEditForm] = useState(false);
    const [showEditPost, setShowEditPost] = useState(false);
    const [editInput, setEditInput] =  useState(data.body)

    let monthIndex = parseInt(data.date.split("/")[0]) - 1;

    const deleteHandler = async (id) =>{
        console.log("id?", id)
        const data = await deletePost({
            postId:  id,

        })
        console.log(data.deletedCount)
        if(data.deletedCount > 0){
            getPostData();
        } else {
            console.log("delete fail")
        }


    }

    const editPostHandler = async (e) =>{
        e.preventDefault()

        console.log("sending", data._id)

        const result = await updatePost({
            postId: data._id,
            body: editInput
        })
        console.log("edit update",result)
        if(result.acknowledged){
            //getFeedData()
            setShowEditPost(false);
            getPostData();
        } else {
            console.log("update fail")
        }


    }


    return <div className='gridItem' key={i + "p"}>
        <div className='date'>{data.date.split("/")[1]}
            <small>{monthNames[monthIndex]}</small></div>
        <div className="icon icon1"></div>
        {
            showEditPost? <input type="text" value={editInput} onChange={(e)=>setEditInput(e.target.value)} /> :<div className="mess">{data.body}</div>
        }



        {!showEditPost ?  <MdModeEditOutline  cursor={"pointer"} onClick={()=>setShowEditPost(!showEditPost)}/> : ""}
        {showEditPost ? <><MdOutlineCancelPresentation   cursor={"pointer"}  onClick={()=>setShowEditPost(!showEditPost)}/>
            <MdSave  cursor={"pointer"}  onClick={editPostHandler} /></>: "" }

        <AiFillDelete cursor={"pointer"} onClick={()=>deleteHandler(data._id)}/>

    </div>
}