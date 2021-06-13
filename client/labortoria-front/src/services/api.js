

//const urlApi = 'http://localhost:3001/' //dev
const urlApi = 'https://devmania.shop/' //prd


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

export async function addPost(post) {
    const response = await fetch(`${urlApi}posts/new/`, {method: 'POST', body: JSON.stringify(post),headers: {'Content-Type': 'application/json'}})
    return await response.json()
};


export async function editPost(idPost, post) {
    
    const response = await fetch(`${urlApi}posts/edit/${idPost}`, {method: 'POST', body: JSON.stringify(post),headers: {'Content-Type': 'application/json'}})
    return await response.json()
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

export function listPostsByTarger(idUser,target) {
    return fetch(`${urlApi}posts/t/${target}`, {
        method: 'POST',
        body: JSON.stringify({idUser}),
        headers: {'Content-Type': 'application/json'}})
        .then(res => res.json())
        .then(response => {return response})
        .catch(error => {return error})
};


export function deletePost(idPost) {
    return fetch(`${urlApi}posts/d/${idPost}`, {
        method: 'DELETE'})
        .then(res => res.json())
        .then(response => {return response})
        .catch(error => {return error})
};

