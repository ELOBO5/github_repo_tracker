import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import './style.css'

const RepoList = () => {

    const [repoElements, setRepoElements] = useState()
    const reposArr = useSelector(state => state.result.repos)
    const error = useSelector(state => state.error)

    useEffect(() => {
        const renderElements = () => {
           const userRepos = reposArr.map((repo, idx) => <NavLink className="repo-link" to={`/repo?${repo.name}`} key={idx}>{repo.name}</NavLink>)
           setRepoElements(userRepos)
        }
        renderElements()
    }, [reposArr])


    return (
        <section aria-label='list-of-repositories'>
            {error ? <p role="alert">Could not find repo data</p> : repoElements}
        </section>
    )
}

export default RepoList;
