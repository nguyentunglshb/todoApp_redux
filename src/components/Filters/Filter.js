import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { searchFilterChange, statusFilterChange } from "../../redux/actions";
import filtersSlice from "./filtersSlice";

function Filter() {
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const dispatch = useDispatch();

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
    // dispatch(searchFilterChange(e.target.value));
    dispatch(filtersSlice.actions.searchFilterChange(e.target.value));
  };

  const radioInputChange = (e) => {
    console.log(e.target.value);
    setFilterStatus(e.target.value);
    // dispatch(statusFilterChange(e.target.value));
    dispatch(filtersSlice.actions.statusFilterChange(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={handleSearchTextChange}
        placeholder="search here..."
      />
      <h2 style={{ color: "#0384fc" }}>Filter by status</h2>
      <input
        type="radio"
        id="all"
        name="fav_language"
        value="All"
        onChange={radioInputChange}
      />
       {" "}
      <label style={{ fontSize: 24 }} htmlFor="all">
        All
      </label>
       {" "}
      <input
        type="radio"
        id="completed"
        name="fav_language"
        value="Completed"
        onChange={radioInputChange}
      />
       {" "}
      <label htmlFor="completed" style={{ fontSize: 24, color: "lightgreen" }}>
        Completed
      </label>
       {" "}
      <input
        type="radio"
        id="todo"
        name="fav_language"
        value="Todo"
        onChange={radioInputChange}
      />
       {" "}
      <label htmlFor="todo" style={{ fontSize: 24, color: "red" }}>
        Todo
      </label>
    </div>
  );
}

export default Filter;
