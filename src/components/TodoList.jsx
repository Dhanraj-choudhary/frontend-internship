import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/todo/todoSlice";

export default function TodoList() {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="todo-container">
    <div className="input-container">
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      {/* <button className="add-btn" >SEARCH</button> */}
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <span onClick={() => dispatch(toggleTask(task.id))}>
              {task.text}
            </span>
            <button
              className="delete-btn"
              onClick={() => dispatch(deleteTask(task.id))}
            >
              🗑
            </button>
          </li>
        ))}
      </ul>
      </div>
    
  );
}

