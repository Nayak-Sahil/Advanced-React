import { configureStore } from '@reduxjs/toolkit';
import ToDoReducer from '../slices/ToDoSlice';
import InputReducer from '../slices/InputSlice';

const store = configureStore({
    reducer: {
        todos: ToDoReducer, //* this keyName that used as in useSelector((state) => state.keyName)
        inputs: InputReducer,
    },
});

export default store;