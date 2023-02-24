import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: 'user',
    initialState: {
        id: null,
        email: null,
        firstName: null,
        lastName: null,
        phoneNumber: null,
    },
    reducers: {
        changeUser: (state, action) => {
            // Make copy of original state, go through each prop, change the values with the payload then return that new state
            
            var newState = {...state}
            for (const prop in action.payload){
                newState[prop] = action.payload[prop];
            }
            return newState;
        },

        clearUser: (state) => {
            var newState = {...state}
            for (const prop in state){
                newState[prop] = null;
            }
            return newState;
        }
    }
})

/*
export const selectUser = (state) => { state.users };
export const selectUserId = (state) => { state.users.id }
*/
export const { changeUser, clearUser } = usersSlice.actions;

export default usersSlice.reducer