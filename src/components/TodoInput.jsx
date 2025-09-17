import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/todo/todoSlice";

export default function TodoInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() !== "") {
      dispatch(addTask(text));
      setText("");
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="What do you need to do?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="add-btn" onClick={handleAdd}>ADD</button>
    </div>
  );
}
