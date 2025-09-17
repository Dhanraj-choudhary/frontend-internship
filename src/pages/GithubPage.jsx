import React from "react";
import GithubSearch from "../components/GithubSearch";
import { Link } from "react-router-dom";

export default function GithubPage() {
  return (
    <div>
      <h1 style={{ color: "#795d9f9d" ,justifyItems:"center", justifyContent:"center", display:"flex"}}>GitHub Dashboard</h1>
      <GithubSearch />
      <Link className="add-btn" style={{textDecoration:"none"}} to="/">⬅ Go to Home</Link>
    </div>
  );
}

