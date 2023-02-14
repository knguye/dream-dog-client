import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    
    function LogoutUser() {
        navigate('/');
    }

    return (
        <div className='page-container'>
            <h1>Homepage</h1>
            <button onClick={LogoutUser}>Logout</button>
        </div>
        
    )
}