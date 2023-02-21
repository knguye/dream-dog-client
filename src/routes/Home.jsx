import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    
    function LogoutUser() {
        navigate('/');
    }

    // TODO: Return regular screen if loading == false, else show splash screen

    return (
        <div className='page-container'>
            <h1>Homepage</h1>
            <button onClick={LogoutUser}>Logout</button>
        </div> 
    )
}