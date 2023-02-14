import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    createHashRouter,
    RouterProvider,
} from 'react-router-dom';

import Login from './routes/Login.jsx';
import Home from './routes/Home.jsx';
import ErrorPage from './routes/ErrorPage.jsx'

const router = createHashRouter([
    {
        path: "/",
        element: <Login/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/home",
        element: <Home/>
    }
])

function render() {
  ReactDOM.render(
        <RouterProvider router={router}/>,
    document.body);
}

render();