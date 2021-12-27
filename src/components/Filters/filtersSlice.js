// const initState = {
//   search: "",
//   status: "All",
//   priorities: [],
// };

// const filtersReducer = (state = initState, action) => {
//   /* {
//           type: 'todoList/addTodo',
//           payload: { id: 5, name: 'Learn Football', completed: false, priority: 'Medium'}
//       } */

//   switch (action.type) {
//     case "filters/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };

//     case "filters/statusFilterChange":
//       return {
//         ...state,
//         status: action.payload,
//       };

//     case "filters/prioritiesFilterChange":
//       return {
//         ...state,
//         priorities: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export default filtersReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
  },
  reducers: {
    searchFilterChange: (state, action) => {
      //  mutation
      state.search = action.payload;
    }, // => {type: 'filters/searchFilterChange'}
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
  },
});
