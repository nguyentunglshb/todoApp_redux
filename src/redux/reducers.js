// const initState = {
//   filters: {
//     search: "",
//     status: "All",
//   },
//   todoList: [
//     { id: 1, name: "Learn React", completed: false },
//     { id: 2, name: "Learn Redux", completed: true },
//     { id: 3, name: "Learn JS", completed: false },
//   ],
// };

// const rootReducer = (state = initState, action) => {
//   console.log({ state, action });
//   /*
//     {
//         type: 'todoList/addTodo',
//         payload: {id: 5, name: 'Learn Mongo', completed: false}
//     } */

//   switch (action.type) {
//     case "todoList/addTodo":
//       return {
//         ...state,
//         todoList: [...state.todoList, action.payload],
//       };

//     case "filters/searchFilterChange":
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           search: action.payload,
//         },
//       };

//     case "filters/statusFilterChange":
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           status: action.payload,
//         },
//       };

//     default:
//       return state;
//   }
// };

// export default rootReducer;

import { combineReducers } from "redux";

import filtersReducer from "../components/Filters/filtersSlice";
import todosListReducer from "../components/TodoList/todosSlice";

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todosListReducer,
});

export default rootReducer;
