import React from 'react';
import './Logout.css'
// import logoutPic from '../assets/power.jpg';


const Logout = (props) => {
    return( 
        <div>
            <button  onClick={()=> props.setSession(undefined), props.clearToken} id="logout" className="logout">Logout</button>
        </div>
    )
}

export default Logout;
