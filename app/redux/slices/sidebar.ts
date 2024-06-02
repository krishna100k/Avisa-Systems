import { createSlice } from '@reduxjs/toolkit';

const sideBarSlice = createSlice({
    name: "sidebar",
    initialState: {
        isOpen: false,
    },
    reducers:{
        isOpen: (state, action) => {
            state.isOpen = action.payload;
        },
    }
})

export const {isOpen} = sideBarSlice.actions;

export default sideBarSlice.reducer