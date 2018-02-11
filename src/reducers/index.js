import { GET_USERS, ADD_USER, DELETE_USER, EDIT_USER } from '../actions';

function userReducer(state = {}, action) {
    switch (action.type) {
        case ADD_USER:
            return { 
                id: action.id,
                name: action.name 
            };
        case EDIT_USER:
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {
                name: action.name
            });
        default: 
            return state;
    }
}

export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_USERS:
            return action.users;
        case ADD_USER:
            return [...state, userReducer(undefined, action)];
        
        case DELETE_USER:
            const index = state.findIndex(user => user.id === action.id);

            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];

        case EDIT_USER:
            return state.map(user => userReducer(user, action));
        
        default:
            return state;
    }
}