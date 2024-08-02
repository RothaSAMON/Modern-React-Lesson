import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";

export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
});

//This mean export from its index.js code and also the fetchUsers.js file
export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser'