import React, { useEffect, useState } from 'react';
import { BackButton } from '../../components';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import copy from 'copy-to-clipboard';
import './style.css';

function RepoCard() {

    // get name of the repo to be displyed
    const location = useLocation();
    const repoName = location.search.split('?')[1];

    // get data for single repo
    const allRepos = useSelector(state => state.result.repos);
    const repo = allRepos.filter(repo => repo.name === repoName)[0];
    const error = useSelector(state => state.error);
    const [repoData, setRepoData] = useState()

    function copyToClipboard(e) {
        e.preventDefault();
        const linkType = e.target.name;
        copy(repo[linkType])
    }

    useEffect(() => {
        const renderCard = () => {
            setRepoData(
                <section role="repository-information">
                    <div id="button-row">
                        <BackButton />
                        <div className="links">
                            <button onClick={copyToClipboard} name="html_url">Copy HTML link</button>
                            <button onClick={copyToClipboard} name="ssh_url">Copy SSH link</button>
                        </div>
                    </div>

                    <div className="intro">
                        <span className="repo-name">{repo.name}</span>
                        <span className="repo-desc">{repo.description}</span>
                    </div>

                    <div className="stats">
                        <span className="repo-date">Created on: {repo.created_at.slice(0, 10)}</span>
                        {repo.language ? <span className="repo-lang">Language: {repo.language}</span> : null }
                        <span className="repo-forks">Forks: {repo.forks_count}</span>
                        <span className="repo-stars">Stargazers: {repo.stargazers_count}</span>
                    </div>
                </section>
            )
        };
        renderCard()
    }, [allRepos])

    return (
        <>
            { error ? <p role="alert">Could not find the repo data</p> :  repoData }
        </>
    )
}

export default RepoCard;
