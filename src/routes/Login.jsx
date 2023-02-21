import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import '../styles/login.css';
import '../styles/common.css'
import { useNavigate } from 'react-router-dom';

export default function Login(){
    return (
        <div className={`page-container`}>
            <div className={`section-container`}>
                <h1>Dream Dog</h1>
            </div>

            <div className={`section-container`}>
                <LoginForm></LoginForm>
            </div>
        </div>
    )
}

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    /*
        1. Let user enter in information, record in local state
        2. Fetch backend users to check for user
        3. Store user data (username, full name, employee ID, permissions (admin, user))
    */
    function LoginUser() {
        // TODO: Clear password after sending to server
        // TODO: Send fetch req to API
        // TODO: Store user data on redux state
        navigate('/home');
    }

    useEffect(() => {

    }, [username, password])

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    
    return (
        <form id={`login-form`}>
            <div className={`form-details`}>
                <input type='text' id='username' name='username' required 
                    minLength={4} maxLength={16} size={16} placeholder='Username' spellCheck={false}
                        onChange={handleUsernameChange}>
                        </input>
                <input type='password' id='password' name='password' required
                    minLength={4} maxLength={16} size={16} placeholder='Password' spellCheck={false}
                        onChange={handlePasswordChange}></input>
                <button onClick={LoginUser}>
                    Login
                </button>
            </div>
        </form>
    )
}