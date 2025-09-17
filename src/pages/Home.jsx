import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div  className="home-container-main">
      <h1 style={{ color: "#795d9f9d" ,justifyItems:"center", justifyContent:"center", display:"flex"}}>Home Page</h1>
      <div className="home-buttons">
        <button  className="add-btn" onClick={() => navigate("/todo")}>To-Do</button>
        <button  className="add-btn" onClick={() => navigate("/github")}>GitHub</button>
      </div>
    </div>
  );
}

