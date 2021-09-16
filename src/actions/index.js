
const loading = {
    type: 'LOADING',
}

const loadResult = (userObj, repoArr) => ({
    type: 'LOAD_RESULT',
    payload: {
        user: userObj,
        repos: repoArr
    }
})

const getResults = async (dispatch, username) => {
    try {
        dispatch(loading)
        const userData = await userRequest(username);
        const repoData = await repoRequest(username);
        dispatch(loadResult(userData, repoData))
    } catch (err) {
        dispatch({ type: 'SET_ERROR', payload: `oh no! ${err.message}` })
    }
}



//--------------Helpers------------------//


const userRequest = async (username) => {
    try {
        const resp = await fetch(`https://api.github.com/users/${username}`)
        const data = await resp.json()

        const filteredData =
        {
            name: data.name,
            login: data.login,
            bio: data.bio,
            avatar_url: data.avatar_url
        }
        return filteredData;
    }catch(err){
       throw new Error('error with user request')
    }
}

const repoRequest = async (username) => {
    try {
        const resp = await fetch(`https://api.github.com/users/${username}/repos`)
        const data = await resp.json()
        const filteredData = data.map(repo => (
            {
                name: repo.name,
                description: repo.description,
                forks_count: repo.forks_count,
                html_url: repo.html_url,
                ssh_url: repo.ssh_url,
                stargazers_count: repo.stargazers_count,
                language: repo.language,
                created_at: repo.created_at
            }
        ))
        return filteredData
    } catch (err) {
        throw new Error('cannot retrieve repo data')
    }
}

export { loadResult, getResults }
