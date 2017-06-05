

const URL_AUTH = ''

const parseJson = (response) => {
    if(response.status >= 200 && response.status < 300) {
        if(response.status === 204){
            return {}
        }
        return response.json()
    }
    else if(response.status >= 400 && response.status < 600) {
        throw new Error(`${response.status} ${response.statusText}: ${text}`)
    }
    else {
        throw new Error(`${response.status} ${response.statusText}: Unexpected status code`)
    }
}

const baseOptions = () => {
    return {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            // authorization
        }
    }
}

const getJson = (url) => {
    let options = { ...baseOptions() }
    return fetch(url, options).then(parseJson)
}

const postJson = (url, data) => {
    let options = {
        ...baseOptions(),
        method: 'post',
        body: JSON.stringfy(data)
    }
    return fetch(url, options).then(parseJSON)
}

const deleteJson = (url) => {
    let options = {
        ...baseOptions(),
        method: 'delete',
    }
    return fetch(url, options)
}

const authWithGoogle = (payload) => {
    return postJson(URL_AUTH, payload)
}

const Api = {
    authWithGoogle,
}

export default Api
