export const GET_USERS = 'GET_USERS';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const EDIT_USER = 'EDIT_USER';

export const getUsers = () => async dispatch => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  dispatch({
    type: GET_USERS,
    payload: users,
  });
  // fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(users => dispatch({
  //     type: GET_USERS,
  //     payload: users,
  //   }));
};

export const addUser = name => ({
  type: ADD_USER,
  payload: name,
});

export const deleteUser = id => ({
  type: DELETE_USER,
  payload: id,
});


export const editUser = (id, name) => ({
  type: EDIT_USER,
  payload: {
    id,
    name,
  },
});

