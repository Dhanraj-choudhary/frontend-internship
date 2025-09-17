import React from "react";

export default function GithubCard({ user }) {
  return (
    <div className="github-card">
      <div className="github-info">
        <img src={user.avatar_url || "path-to-google-logo.png"} alt={user.login} />
        <h3>{user.name || user.login}</h3>
        <p data-icon="❤️"> {user.bio || "Open Source"}</p>
        <p data-icon="📍"> {user.location || "United States of America"}</p>
        <p data-icon="👥"> Followers: {user.followers || 60197}</p>
        <p data-icon="📦"> Public Repos: {user.public_repos || 2798}</p>
      </div>
    </div>
  );
}
