import * as React from 'react';
import * as ReactDOM from 'react-dom';
import store from './store';
import { Provider, useDispatch } from 'react-redux';

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
        element: <Home/>,
    }
])



function render() {
  ReactDOM.render(
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>,
    document.body);
}

render();