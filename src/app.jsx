import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import store from './store';
import { Provider, useDispatch, useSelector } from 'react-redux';

import {
    createHashRouter,
    RouterProvider,
} from 'react-router-dom';

import './styles/common.css'

import Login from './routes/Login.jsx';
import Root from './routes/Root.jsx';
import ErrorPage from './routes/ErrorPage.jsx'
import LoadingScreen from './components/LoadingScreen.jsx';

import Home from './routes/Home.jsx';
import Messages from './routes/Messages.jsx';
import Schedule from './routes/Schedule.jsx';

const router = createHashRouter([
    {
        path: "/",
        element: <Login/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/root",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "home",
                element: <Home/>
            },
            {
                path: "schedule",
                element: <Schedule/>
            },
            {
                path: "contacts",
                element: <ErrorPage/>
            },
            {
                path: "payment",
                element: <ErrorPage/>
            },
            {
                path: "messages",
                element: <Messages/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} fallbackElement={<LoadingScreen/>}/>
        </Provider>
    </React.StrictMode>);
