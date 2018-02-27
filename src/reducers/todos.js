import { GET_TODOS, TOGGLE_TODO } from '../actions';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return;
    case TOGGLE_TODO:
      return;
    default:
      return state;
  }
};

export default reducer;
