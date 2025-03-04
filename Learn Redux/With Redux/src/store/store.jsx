// ! This is legacy code that is deprecated and should not be used in new projects. Use the Redux Toolkit instead where configureStore() used instead of createStore().
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension"; // ! It is just for chrome extension

//* Reducer 1
const InptReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_Text":
      return action.payload;
    default:
      return state;
  }
};

//* Reducer 2
const ToDosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    default:
      return state;
  }
};

/**
 *? if we have multiple operation related to any single state then we combine all the operation into a single reducer.
 *? And if we have different operation and each operation is related to different state then we create different reducer for each set of operation. 
 *! For Example, To store and manage the input text as in state we created InptReducer and 
 *! To store and manage the list of todos we created ToDosReducer.
 *! Now we have to combine both the reducer into a single root reducer using combineReducers() method. 
 */
const rootReducer = combineReducers({ InptReducer, ToDosReducer });

//* Create Redux Store
const store = createStore(
  rootReducer,
  // ! This following step is necessary only for chrome extension to work
  composeWithDevTools(applyMiddleware(...[]))
);

export default store;
