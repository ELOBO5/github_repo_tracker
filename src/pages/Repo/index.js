import React from "react";
import { BackButton, RepoCard, Profile } from "../../components";
import './style.css'

const Repo = () => {

  return (
    <main id='repo-page-container'>
        <Profile />
        <RepoCard />
    </main>
  );
};

export default Repo;
