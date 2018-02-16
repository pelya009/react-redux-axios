export const GET_USERS = 'GET_USERS';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const EDIT_USER = 'EDIT_USER';

let nextId = 10;

export function getUsers(users) {
        nextId = users.length + 1;
        console.log({
            type: GET_USERS,
            users
        });
    return {
        type: GET_USERS,
        users
    };
}

export function addUser(name) {
    return {
        type: ADD_USER,
        id: nextId++,
        name
    };
}

export function deleteUser(id) {
    return {
        type: DELETE_USER,
        id
    };
}

export function editUser(id, name) {
    return {
        type: EDIT_USER,
        id,
        name
    };
}