import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Outlet, Link } from 'react-router-dom';
import WelcomeScreen from '../components/WelcomeScreen.jsx';
import Sidebar from '../components/Sidebar.jsx';

export default function Root(props) {
    const navigate = useNavigate();
    const [currentRoute, setCurrentRoute] = React.useState('root')

    function LogoutUser() {
        navigate('/');
    }

    /* TODO:
        1. Sidebar w/ navigation
        2. Context menu on bottom, drawer comes out for logout, user settings, etc
        3. Display user full name at top
    */
    const user = useSelector((state) => state.user);
    console.log(user);

    return (
        <>
            <Sidebar setCurrentRoute={setCurrentRoute}></Sidebar>
            <div id="detail">
                {currentRoute === 'root' ? <WelcomeScreen firstName={user.firstName}/> : <Outlet/>}
                
            </div>
        </> 
    )
}