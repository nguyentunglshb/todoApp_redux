import React, { useState } from "react";
import { useDispatch } from "react-redux";
import todoListSlice from "../TodoList/todosSlice";

function Todo({ name, completed, id }) {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(completed);

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(todoListSlice.actions.toggleTodoStatus(id));
  };

  return (
    <div style={{ display: "flex" }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={toggleCheckbox}
        // style={{ width: 40, height: 40 }}
      />
      <span
        style={{
          ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
        }}
      >
        {name}
      </span>
    </div>
  );
}

export default Todo;
