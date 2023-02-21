import * as React from 'react';
import { useState, useEffect } from 'react';

import '../styles/login.css';
import '../styles/common.css'

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/config';

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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const serverDomain = 'https://bet-on-server.onrender.com';
    const dispatch = useDispatch();

    /*
        1. Let user enter in information, record in local state
        2. Fetch backend users to check for user
        3. Store user data (username, full name, employee ID, permissions (admin, user))
    */
    const LoginUser = () => {
        console.log("API address: " + serverDomain);
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid; // Get UID from response
                setPassword(); // Clear Password
                
                fetch(`${serverDomain}/id/${uid}`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                .then((response) => {
                    return response.json();
                })
                .then ((value) => {
                    const user = value;
                    if (user.id != uid){
                        alert('User does not exist!');
                        return;
                    }
                })
                .then(() => {
                    dispatch(toggleLoading(false));
                    navigate('/home');
                })
                .catch ((err) => {
                    alert(err); // TODO: Prevent this error from catching (unexpected char JSON)
                }); 
            })
            .catch(error => {
                alert(error);
            })

    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    
    return (
        <form id={`login-form`}>
            <div className={`form-details`}>
                <input type='text' id='username' name='username' required 
                    minLength={4} maxLength={32} size={16} placeholder='Email' spellCheck={false}
                        onChange={handleEmailChange}>
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