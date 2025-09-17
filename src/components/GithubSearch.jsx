import React, { useState } from "react";
import axios from "axios";
import GithubCard from "./GithubCard";

export default function GithubSearch() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!username) {
      setError("Please enter a username");
      setUserData(null);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(res.data);
    } catch (err) {
      setError("User not found");
      setUserData(null);
    }
    setLoading(false);
  };

  return (
    <div className="github-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="add-btn" onClick={handleSearch}>Search</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {userData && <GithubCard user={userData} />}
    </div>
  );
}

