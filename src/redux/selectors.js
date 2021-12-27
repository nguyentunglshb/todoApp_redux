import { createSelector } from "reselect";

// export const todoListSelector = (state) => {
//   const todosRemaining = state.todoList.filter((todo) => {
//     return todo.name.toLowerCase().includes(state.filters.search.toLowerCase());
//   });
//   return todosRemaining;
// };

export const searchTextSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList;
export const filterStatusSelector = (state) => state.filters.status;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  (todoList, searchText, status) => {
    return todoList.filter((todo) => {
      if (status === "All") return todo.name.toLowerCase().includes(searchText);

      return (
        todo.name.toLowerCase().includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed)
      );
    });
  }
);
