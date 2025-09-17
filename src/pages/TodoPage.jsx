import React from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { Link } from "react-router-dom";

export default function TodoPage() {
  return (
    <div >
     <h1 style={{ color: "#795d9f9d" ,justifyItems:"center", justifyContent:"center", display:"flex"}}>Add your task to make your day productive</h1>
      <TodoInput />
      <TodoList />
      <Link className="add-btn" to="/" style={{textDecoration:"none"}}>⬅ Go to Home</Link>
    </div>
  );
}

