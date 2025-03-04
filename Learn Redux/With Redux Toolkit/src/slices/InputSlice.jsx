import { createSlice } from "@reduxjs/toolkit";

const InputSlice = createSlice({
    name: "input",
    initialState: "",
    reducers: {
        setInput: (state, action) => {
            return action.payload;
        },
    }
});

//? To export all the operation from reducer:
//? Syntax: export const { function1, function2, function3 } = SliceName.actions;

export const { setInput } = InputSlice.actions;

export default InputSlice.reducer;