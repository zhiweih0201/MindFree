
import '../styles/therapistpage.scss';
import profile1 from '../assets/profile1.png';
import profile2 from '../assets/profile2.png';
import profile3 from '../assets/profile3.png';
import profile4 from '../assets/profile4.png';
import profile5 from '../assets/profile5.png';
import profile6 from '../assets/profile6.png';
import profile7 from '../assets/profile7.png';
import profile8 from '../assets/profile8.png';
import profile9 from '../assets/profile9.png';


import logo from '../assets/CAPS.png';

import search from '../assets/search.png';

import lines from '../assets/lines.png';
import { useNavigate } from "react-router-dom";
import {therapistData} from "../utils/therapistData";
import {useEffect, useState} from "react";


const imgObject = {
    profile1: profile1,
    profile2: profile2,
    profile3: profile3,
    profile4: profile4,
    profile5: profile5,
    profile6: profile6,
    profile7: profile7,
    profile8: profile8,
    profile9: profile9
}
export default function TherapistPage(props) {
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState();

    const [query, setQuery] = useState("");
    const [showEditForm, setShowEditForm] = useState(false)
    const [editForm, setEditForm] = useState({})



    useEffect(()=>{
        console.log("?",filteredData)
    },[filteredData])

    async function fetchTherapist() {
        const res = await fetch("http://localhost:3000/api/therapist")
        const d = await res.json();
        //console.log("data?:" , d.data)
        console.log("???", d)
        setData(d.data);


    }


    useEffect(()=>{

        fetchTherapist();


    },[])

    useEffect(() => {
        const timeOutId = setTimeout(() => {

            let tempData = [];
            //console.log("search?",query)
            const q = query.toLowerCase().trim();



            if(query == "" && data.length != 0){
                tempData = data;
            } else if( q.startsWith("#") ) {

                data.map(d => {
                    console.log("d?:",d, d.speciality, q.slice(1))
                    if ( d.speciality.includes( q.slice(1) )
                    ) {
                        tempData.push(d);
                    }
                })

            } else {

                data.map(d => {

                    if( d.fn.toLowerCase().includes(q)
                        || d.ln.toLowerCase().includes(q)
                    ){
                        tempData.push(d);
                    }
                })

            }

            console.log("i am filtering")
            if(tempData.length !== 0){
                setFilteredData([...tempData]);
            }


        }, 500);

        return () => clearTimeout(timeOutId);
    }, [query,data]);


    const handleOnChange = e => {
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value,
        })
    }


    const submitHandler = async (e) => {
        e.preventDefault()
        const {id, fn,ln , speciality} = e.target
        console.log(id.value, fn.value,ln.value , speciality.value);


        const res = await fetch("http://localhost:3000/api/therapist",{
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id.value,
                fn: fn.value,
                ln: ln.value,
                speciality: speciality.value.split(",")
            })
        })
        const d = await res.json();
        setShowEditForm(false)
        fetchTherapist();

    }

    let speciality = ["marriage", "relationships", "anxiety", "drugs", "depression","school","sports"];
    //console.log("??",data,filteredData,  filteredData.length)
    return <div className = 'background'>
        <div className='logo'>
            <img src={logo} width="200px" />
        </div>
        <div className='main'>
            <h1>Therapist Directory</h1>

            <div className="buttonRow">
                <fieldset>

                    <input type={"text"} value={query}  onChange={event => setQuery(event.target.value)} placeholder="Search..."/>
                    <img src={search} />

                </fieldset>
                <button className={"sm"} onClick={()=>setQuery("")}>Clear</button>

            </div>

            <h4>Tags#</h4>
            <div className='buttonRow'>
                {
                    speciality.map((s,i) => {
                        return <button key={i} onClick={()=> setQuery("#" + s)}>{s}</button>
                    })
                }
            </div>

            
            <div className='profile-list'>
                {
                    filteredData != undefined ?filteredData.map(f => {

                        return <div key={f._id}>

                            <div className={"flex"}>
                                <div className={"left"}>
                                    <p className={"name"}>{f.fn} {f.ln}</p>
                                <small>
                                    Specialities:<br/>
                                    {
                                        f.speciality.toString()
                                    }
                                </small>

                                </div>
                                <div className={"right"} style={{backgroundImage: `url(${imgObject[f.profile.split(".")[0]]})`}}>

                                </div>
                                <button onClick={()=>{
                                    setShowEditForm(true)
                                    setEditForm(f)
                                }} className={"btn-sm btn-edit"}>Edit</button>
                            </div>
                            <div>

                            </div>


                        </div>
                    }) : "Loading.."
                }

            </div>
            
        </div>

        <div className='alignRight'>
            <button onClick={()=> navigate("/HomePage")}>Back to Home</button>
        </div>




        {showEditForm ?  <div className={"editForm"}>
            <div>
            <h2>Edit Specialties </h2>

            <form action="" onSubmit={submitHandler}>
                <fieldset>
                    <label htmlFor="">First Name</label>
                    <input name={"fn"} type="text" onChange={handleOnChange} value={editForm.fn}/>
                </fieldset>
                <fieldset>
                    <label htmlFor="">Last Name</label>
                    <input name={"ln"} type="text" onChange={handleOnChange} value={editForm.ln}/>
                </fieldset>
                <fieldset>
                    <label htmlFor="">Speciality <small>seperated by ,</small></label>
                    <input name={"speciality"} type="text" onChange={handleOnChange} value={editForm.speciality.toString()}/>
                </fieldset>
                <small>id: {editForm._id}</small>
                <input type="hidden" name={"id"} value={editForm._id}/>
                <fieldset className={"row"}>
                    <input type="submit" value={"update"}/>
                    <input type="button" onClick={()=>setShowEditForm(false)} value={"close"}/>
                </fieldset>
            </form>
            </div>
        </div>:"" }

    </div>
}