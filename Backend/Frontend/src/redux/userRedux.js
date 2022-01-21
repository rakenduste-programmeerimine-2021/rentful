import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser: null,
        isFetching: false,
        error: false
    },

    reducers:{
        loginStart:(state) => { //alustatakse fetchi
            state.isFetching=true
        },
        loginSuccess:(state, action) => { //Sisselogimisel lõppeb fetch
            state.isFetching=false;
            state.currentUser=action.payload;
        },
        loginFailure:(state) => { //Logimise ebaõnnestumisel lõppeb fetch tuleb error
            state.isFetching=false;
            state.error=true;
        },
    },
});

export const {loginStart, loginSuccess, loginFailure} = userSlice.actions;
export default userSlice.reducer;