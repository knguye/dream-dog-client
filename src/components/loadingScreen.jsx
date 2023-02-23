import * as React from 'react';
import '../styles/common.css';

export default function LoadingScreen() {
    console.log("Loading..");

    return (
        <div className="page-container" id="loading-page">
            <img className="loading-logo" src="media-loader://src/assets/logo.png" width="200" height="200"/>
        </div>
    )
}