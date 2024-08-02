import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3005/users');

    await pause(2000);  //This call a pause function below

    return response.data;
});

//Dev only!!
//This function is make a tiny little pause for us, it gonna delay handling for testing
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

export { fetchUsers };