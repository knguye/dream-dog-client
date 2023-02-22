import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/user/userSlice';
import statusReducer from './features/status/statusSlice';

export default configureStore ({
    reducer: {
        user: userReducer,
        status: statusReducer,
    }
})

