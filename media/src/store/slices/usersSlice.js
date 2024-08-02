import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUsers';
import { addUser } from '../thunks/addUser';
import { removeUser } from '../thunks/removeUser';

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    //This allow us to watch for some additional action types
    extraReducers(builder) {
        //BELOW is the block of reducers of Fetching Users:

        //There is the "state type and reducer function"
        //Reducer function are what gets executed anytime we see an action with these particular types
        builder.addCase(fetchUsers.pending, (state, action) => {
            //Update our state object 
            //to show the yser what we are loading data
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            //When data is laoding success we set to false
            state.isLoading = false;
            //Here is replace the current data with the data we just fetch
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });


        //BELOW is the block of reducers of Adding Users:
        builder.addCase(addUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload)
        });
        builder.addCase(addUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });


        //BELOW is the block of reducers of Removing Users:
        builder.addCase(removeUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(removeUser.fulfilled, (state, action) => {
            state.isLoading = false;
            
            state.data = state.data.filter((user) => {
                return user.id !== action.payload.id;
            });
        });
        builder.addCase(removeUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    },
});

export const usersReducer = usersSlice.reducer;