import { createSlice } from '@reduxjs/toolkit';
import { addCar } from './carsSlice';

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        cost: 0
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload;
        },
        changeCost(state, action) {
            state.cost = action.payload;
        }
    },
    //Code below is about to reset the submit form after we input to default(Reset) :
    extraReducers(builder) {
        builder.addCase(addCar, (state, action) => {
            state.name = '';
            state.cost = 0;
        });
    }
});

export const {changeCost, changeName} = formSlice.actions;
// Here below is export the Combine Reducer
export const formReducer = formSlice.reducer;