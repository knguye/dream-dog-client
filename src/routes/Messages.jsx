import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



export default function Messages() {
    const navigate = useNavigate();

    return (
        <div className='page-container'>
            <h1>Messages</h1>
            <div className="section-container">

            </div>
        </div>
    )
}