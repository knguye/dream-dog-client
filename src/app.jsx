import * as React from 'react';
import * as ReactDOM from 'react-dom';
import store from './store';
import { Provider, useDispatch } from 'react-redux';

import {
    createHashRouter,
    RouterProvider,
} from 'react-router-dom';

import Login from './routes/Login.jsx';
import Root from './routes/Root.jsx';
import Home from './routes/Home.jsx';
import ErrorPage from './routes/ErrorPage.jsx'
import LoadingScreen from './components/loadingScreen.jsx';


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
                path: "/root/home",
                element: <Home/>
            }
        ]
    }
])



function render() {
  ReactDOM.render(
        <Provider store={store}>
            <RouterProvider router={router} fallbackElement={<LoadingScreen/>}/>
        </Provider>,
    document.body);
}

render();