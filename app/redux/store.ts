import { configureStore } from '@reduxjs/toolkit';
import sideBar from "./slices/sidebar"

const store = configureStore({
    reducer: {
        sideBar: sideBar
    }
})

export default store;