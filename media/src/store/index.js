import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersReducer } from "./slices/usersSlice";
import { albumsApi } from "./api/albumsApi";
import { photosApi } from "./api/photosApi";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(albumsApi.middleware)
        .concat(photosApi.middleware);
    },
});

setupListeners(store.dispatch);

//This mean export from its index.js code and also the fetchUsers.js file
export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser'
export { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from './api/albumsApi';
export {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation
} from './api/photosApi';