export const GET_USERS = 'GET_USERS';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const EDIT_USER = 'EDIT_USER';

export const getUsers = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => dispatch({
      type: GET_USERS,
      users,
    }));
};

export const addUser = name => ({
  type: ADD_USER,
  name,
});

export const deleteUser = id => ({
  type: DELETE_USER,
  id,
});


export const editUser = (id, name) => ({
  type: EDIT_USER,
  id,
  name,
});

