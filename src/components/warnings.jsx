import * as React from 'react';
import { useState, useEffect } from 'react';

export function PopupWarning() {
    return (
        <div>
            <p>Popup Text</p>
        </div>
    )
}

export function InlineWarning(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

export function WarningMessage(props) {
    var message = '';
    console.log(props.code);

    switch (props.code){
        case 'auth/user-not-found':
            message = "User not found";
            break;
        case 'auth/invalid-email':
            message = "Email does not exist";
            break;
        case 'auth/wrong-password':
            message = "Incorrect password";
            break;
        default:
            message = "Unknown error, please contact IT"
            break;
    }

    return (
        <p className="warning-msg">{message}</p>
    )
}