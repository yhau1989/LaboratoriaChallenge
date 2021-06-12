

const urlApi = 'http://localhost:3001/'


export async function registerUser(user) {

    console.log(JSON.stringify(user))
    fetch(`${urlApi}auth/add/`, {
        method: 'POST',
        body: JSON.stringify({user}),
        headers: {'Content-Type': 'application/json'}})
        .then(res => res.json())
        .then(response => {return response})

}

export async function loginUser(user) {
    fetch(`${urlApi}auth/user/`, {
        method: 'POST',
        body: user,
        headers: {'Content-Type': 'application/json'}})
        .then(res => res.json())
        .then(response => {return response})
        .catch(error => {return error})
};
