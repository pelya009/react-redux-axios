import { GET_TODOS, TOGGLE_TODO } from '../actions';

const initialState = {
  todos: [],
  completed: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return { todos: action.payload };

    case TOGGLE_TODO:
      return {
        todos: state.todos.map(todo => {
         if (todo.id === action.payload) todo.completed = !todo.completed;
         return todo;}),
      };

    default:
      return state;
  }
};

export default reducer;
