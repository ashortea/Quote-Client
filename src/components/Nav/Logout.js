import React from 'react';

// import logoutPic from '../assets/power.jpg';


const Logout = (props) => {
    return( 
        <div>
            <button  onClick={()=> props.setSession(undefined)} id="logout" className="logout">Logout</button>
        </div>
    )
}

export default Logout;
