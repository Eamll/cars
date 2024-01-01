import { createSlice } from '@reduxjs/toolkit';
import { addCar } from './carsSlice';

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        cost: 0
    },
    reducers: {
        updateName: (state, action) => {
            state.name = action.payload;
        },
        updateCost: (state, action) => {
            state.cost = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(addCar, (state) => {
            state.name = '';
            state.cost = 0;
        });
    }
});

export const { updateName, updateCost } = formSlice.actions;
export const formReducer = formSlice.reducer;