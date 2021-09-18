import React from "react";
import { BackButton, Profile, RepoList } from "../../components";
import "./style.css";

const User = () => {
  return (
    <main id="user-page-container">
      <Profile />
      <RepoList />
    </main>
  );
};

export default User;
