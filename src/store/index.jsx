import { configureStore } from '@reduxjs/toolkit';
import { carsReducer, addCar, removeCar, updateSearchTerm } from './slices/carsSlice';
import { formReducer, updateName, updateCost } from './slices/formSlice';

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
});

export { store, addCar, removeCar, updateSearchTerm, updateName, updateCost };