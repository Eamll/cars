import { createSlice } from '@reduxjs/toolkit';

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
    }
});

export const { updateName, updateCost } = formSlice.actions;
export const formReducer = formSlice.reducer;