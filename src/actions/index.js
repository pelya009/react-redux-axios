export const GET_USERS = 'GET_USERS';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const EDIT_USER = 'EDIT_USER';

export function getUsers(users) {
    return {
        type: GET_USERS,
        users
    };
}

export function addUser(name) {
    return {
        type: ADD_USER,
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