// const initState = [
//   { id: 1, name: "learn Yoga", completed: false, priority: "Medium" },
//   { id: 2, name: "learn Redux", completed: true, priority: "High" },
//   { id: 3, name: "learn React", completed: false, priority: "Low" },
// ];

// const todosListReducer = (state = initState, action) => {
//   /* {
//           type: 'todoList/addTodo',
//           payload: { id: 5, name: 'Learn Football', completed: false, priority: 'Medium'}
//       } */

//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];

//     case "todoList/toggleTodoStatus":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );

//     default:
//       return state;
//   }
// };

// export default todosListReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "learn Mongo", completed: false },
    { id: 2, name: "learn Redux", completed: true },
    { id: 3, name: "learn React", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) currentTodo.completed = !currentTodo.completed;
    },
  },
});
