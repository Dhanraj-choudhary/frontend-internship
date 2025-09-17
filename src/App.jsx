import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TodoPage from "./pages/TodoPage";
import GithubPage from "./pages/GithubPage";
import "./app.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/github" element={<GithubPage />} />
      </Routes>
    </BrowserRouter>
  );
}

