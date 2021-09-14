import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import copy from 'copy-to-clipboard';

function RepoCard() {

    // get name of the repo to be displyed
    const location = useLocation();
    const repoName = location.pathname.split('/')[2];
    
    // get data for single repo
    const allRepos = useSelector(state => state.result.repos);
    const repo = allRepos.filter(repo => repo.name === repoName);
    const error = useSelector(state => state.error);

    function copyToClipboard(e) {
        e.preventDefault();
        const linkType = e.target.id;
        copy(repo[linkType])
    }

    console.log(repo)
    const renderCard = repo => (
            <div id="repo-card">
                <div className="intro">
                    <span className="repo-name">{repo.name}</span>
                    <span className="repo-desc">{repo.description}</span>
                </div>

                <div className="stats">
                    {/* <span className="repo-date">Created on: {repo.created_at.slice(0, 10)}</span> */}
                    <span className="repo-lang">Language: {repo.language}</span>
                    <span classname="repo-forks">Forks: {repo.forks_count}</span>
                    <span className="repo-stars">Stargazers: {repo.stargazers_count}</span>
                </div>

                <div className="links">
                    <button onClick={copyToClipboard} id="html_link">Copy HTML link</button>
                    <button onClick={copyToClipboard} id="ssh_link">Copy SSH link</button>
                </div>
            </div>
        )

    return(
        <>{ error ? <p role="alert">Could not find the repo data</p> : renderCard(repo[0]) }</>
    )
}

export default RepoCard;
