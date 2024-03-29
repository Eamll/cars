import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        updateSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        addCar: (state, action) => {
            state.data.push(
                {
                    id: nanoid(),
                    name: action.payload.name,
                    cost: action.payload.cost
                }
            );
        },
        removeCar: (state, action) => {
            state.data = state.data.filter(car => car.id !== action.payload);
        },
    }
});

export const { addCar, removeCar, updateSearchTerm } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;