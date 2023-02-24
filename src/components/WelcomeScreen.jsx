import * as React from 'react';
import '../styles/common.css';

export default function WelcomeScreen(props) {
    return (
        <div className="page-container" id="welcome-page">
            <img src="media-loader://src/assets/logo.png" width="200" height="200"/>
            <h1>Welcome {props.firstName}!</h1>
        </div>
    )
}