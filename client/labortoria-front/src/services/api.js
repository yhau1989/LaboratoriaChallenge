

const urlApi = 'http://localhost:3001/'


export function registerUser(user) {

    //console.log(JSON.stringify(user))
     return fetch(`${urlApi}auth/add/`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'Content-Type': 'application/json'}})
        .then(res => res.json())
        .then(response => {return response})
        .catch(error => {return error})

}

export function loginUser(user) {
    return fetch(`${urlApi}auth/user/`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'Content-Type': 'application/json'}})
        .then(res => res.json())
        .then(response => {return response})
        .catch(error => {return error})
};

export function addPost(post) {
    return fetch(`${urlApi}posts/new/`, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {'Content-Type': 'application/json'}})
        .then(res => res.json())
        .then(response => {return response})
        .catch(error => {return error})
};


export function listPosts(idUser) {
    return fetch(`${urlApi}posts/list/`, {
        method: 'POST',
        body: JSON.stringify({idUser}),
        headers: {'Content-Type': 'application/json'}})
        .then(res => res.json())
        .then(response => {return response})
        .catch(error => {return error})
};

