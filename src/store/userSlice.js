import {createSlice} from "@reduxjs/toolkit";

let user = createSlice({
    name: 'userName',
    initialState: {name: 'sung'},
    reducers: {
        changeName(state) {
            state.name = "kim"
        }
    }
});

export let {changeName} = user.actions

export default user;