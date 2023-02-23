import * as React from 'react';
import { useState, useEffect } from 'react';

import '../styles/login.css';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoading } from '../features/status/statusSlice'
import { changeUser } from '../features/user/userSlice';

import { firebase } from '../firebase/config';

import { InlineWarning, WarningMessage } from '../components/warnings.jsx';
import LoadingScreen from '../components/LoadingScreen.jsx';

export default function Login(){
    const serverDomain = 'http://192.168.0.137:3001';
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loading = useSelector((state) => state.status.loading);

    const [errors, setErrors] = useState([]);
    const [errorMessages, setErrorMessages] = useState(<></>)

    useEffect(() => {
        const msgs = errors.map((code, key) => (
            <WarningMessage code={code} key={key}></WarningMessage>
        ));
        
        setErrorMessages(msgs);
    }, [errors])

    function LoginForm() {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        /*
            1. Let user enter in information, record in local state
            2. Fetch backend users to check for user
            3. Store user data (username, full name, employee ID, permissions (admin, user))
        */
        const loginUser = () => {
            console.log("API address: " + serverDomain);
            dispatch(toggleLoading(true));

            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then((response) => {
                    const uid = response.user.uid; // Get UID from response
                    console.log("Finding user");
    
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
                            console.error('User does not exist!');
                            return;
                        }
                        console.log(user);
                        dispatch(changeUser(user));
                    })
                    .then(() => {
                        dispatch(toggleLoading(false));
                        navigate('/root');
                    })
                    .catch ((err) => {
                        console.error(err); // Fetch error (Serverside thrown)
                        return;
                    }); 
                })
                .catch(error => {
                    dispatch(toggleLoading(false));
                    console.error(error.code); // ALERTS CAUSE THE SCREEN TO LOCK UP! CREATE YOUR OWN POPUPS
                    
                    if (error){
                        // TODO: Check for duplicate errors
                        setErrors([error.code]);
                    }

                    return;
                })          
        }
    
        function handleEmailChange(event) {
            setEmail(event.target.value);
        }
    
        function handlePasswordChange(event) {
            setPassword(event.target.value);
        }
    
        

        return (
            <form id={`login-form`} onSubmit={(e) => {e.preventDefault(); loginUser();}}>
                <div className={`form-details`}>
                    <input type='text' id='email' name='email' required 
                        maxLength={32} size={16} placeholder='Email'
                            onChange={handleEmailChange}
                            value={email}>
                            </input>
                    <input type='password' id='password' name='password' required
                        maxLength={16} size={16} placeholder='Password'
                            onChange={handlePasswordChange}
                            value={password}></input>
                    <button>
                        Login
                    </button>
                </div>
            </form>
        )
    }

    return (
        ( !loading ?
            <div className={`page-container`} id="login-page">
                <div className={`section-container`}>
                    <h1>Dream Dog</h1>
                </div>

                <div className={`section-container`}>
                    <LoginForm></LoginForm>
                </div>

                <InlineWarning>
                        {errorMessages}
                </InlineWarning>
            </div>

            : 

            <LoadingScreen></LoadingScreen>
        )
    )
}

