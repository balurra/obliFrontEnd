import { createSlice } from "@reduxjs/toolkit";
import {
    getItemFromLocalStorage,
//set, remove
} from "../../utils/storage";





const initialState = {
    userLogged: getItemFromLocalStorage('censoUser'),
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //login, logout
    },
});

//export const {login, logout} = userSlice.actions;
export default userSlice.reducer;