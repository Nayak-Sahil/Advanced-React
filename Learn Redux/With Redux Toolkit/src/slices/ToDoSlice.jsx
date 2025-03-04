import { createSlice } from "@reduxjs/toolkit";


const ToDoSlice = createSlice({
    name: "todoss", 
    initialState: [],
    reducers: { //* It just a object that contains multiple functions that are used to update the state
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        markAsCompleted: (state, action) => {
            state.forEach((todo)=>{
                if(todo.id === action.payload) todo.completed = true;
            })
        }
    }
});

export const { addTodo, markAsCompleted } = ToDoSlice.actions;

export default ToDoSlice.reducer;