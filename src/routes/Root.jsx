import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Outlet, Link } from 'react-router-dom';
import '../styles/sidebar.css';

export default function Root() {
    const navigate = useNavigate();
    
    function LogoutUser() {
        navigate('/');
    }

    /* TODO:
        1. Sidebar w/ navigation
        2. Context menu on bottom, drawer comes out for logout, user settings, etc
        3. Display user full name at top
    */

    const user = useSelector((state) => state.user);

    return (
        <>
            <div id="sidebar">
                <h1>Dream Dog</h1>
                <nav>
                <ul>
                    <li>
                    <Link to={`/root/home`}>Home</Link>
                    </li>
                    <li>
                    <a href={`/schedule`}>Schedule</a>
                    </li>
                    <li>
                    <a href={`/contacts`}>Contacts</a>
                    </li>
                    <li>
                    <a href={`/payment`}>Payment</a>
                    </li>
                </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet/>
            </div>
        </> 
    )
}