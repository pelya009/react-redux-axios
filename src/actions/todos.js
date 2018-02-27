export const GET_TODOS = 'GET_TODOS';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const getTodos = userId => async dispatch => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${userId}`);
    const todos = await response.json();
    dispatch({
      type: GET_TODOS,
      payload: todos,
    });
  } catch (error) {
    throw new Error('Data was not recieved from server');
  }
};

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: id,
});
