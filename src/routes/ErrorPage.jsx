import * as React from 'react';
import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    // TODO: Add various renders for different error codes
    const error = useRouteError();
    console.error(error)

    return (
        <div className='page-container'>
            <h1>Page not found!</h1>
            <p>Please contact IT for help.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to={'/root'}>Return to Home</Link>
        </div>

    )
}