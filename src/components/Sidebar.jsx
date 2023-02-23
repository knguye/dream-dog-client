import '../styles/sidebar.css';
import * as React from 'react'
import { Link } from 'react-router-dom';

export default function Sidebar(props) {
    return (
            <div id="sidebar">
                <h1>Dream Dog</h1>
                <nav>
                <ul>
                    <li>
                        <Link onClick={() => props.setCurrentRoute('home')} to={`home`}>Home</Link>
                    </li>
                    <li>
                        <Link onClick={() => props.setCurrentRoute('schedule')} to={`schedule`}>Schedule</Link>
                    </li>
                    <li>
                        <Link onClick={() => props.setCurrentRoute('contacts')} to={`contacts`}>Contacts</Link>
                    </li>
                    <li>
                        <Link onClick={() => props.setCurrentRoute('payment')} to={`payment`}>Payment</Link>
                    </li>
                    <li>
                        <Link onClick={() => props.setCurrentRoute('messages')} to={`messages`}>Messages</Link>
                    </li>
                </ul>
                </nav>
            </div>
    )
}