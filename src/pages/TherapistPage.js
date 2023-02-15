
import '../styles/therapistpage.scss';
import profile1 from '../assets/profile1.png';
import profile2 from '../assets/profile2.png';
import profile3 from '../assets/profile3.png';
import profile4 from '../assets/profile4.png';
import profile5 from '../assets/profile5.png';
import profile6 from '../assets/profile6.png';

import logo from '../assets/CAPS.png';

import search from '../assets/search.png';

import lines from '../assets/lines.png';
import { useNavigate } from "react-router-dom";


export default function TherapistPage(props) {
    const navigate = useNavigate();

    return <div className = 'background'>
        <div className='logo'>
            <img src={logo} width="200px" />
        </div>
        <div className='main'>
            <h1>Therapist Directory</h1>
            <div className='buttonRow'>
            <div className='lines'>
            <img src={lines} />
            </div>
            <fieldset>
              
            <input type={"text"} placeholder="Search..."/>
            <img src={search} />
            </fieldset>
            </div>
            <div className='profile-list'>
            <img src={profile1} />
            <img src={profile2} />
            <img src={profile3} />
            <img src={profile4} />
            <img src={profile5} />
            <img src={profile6} />
            </div>
        </div>
        <div> #tags</div>
        <div className='buttonRow'>
           
            <button>Undergraduate</button>
            <button>FGLI</button>
        </div>
        <div className='alignRight'>
            <button onClick={()=> navigate("/")}>Back to Home</button>
        </div>
       




    </div>
}