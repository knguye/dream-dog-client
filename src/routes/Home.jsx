import * as React from 'react';
import { useNavigate } from 'react-router-dom';



export default function Home() {
    const navigate = useNavigate();
    
    /*
        TODO:
        1. Widgets on screen
    */

    return (
        <div className='page-container'>
            <h1>Welcome {user.fullname}</h1>
        </div>
    )
}