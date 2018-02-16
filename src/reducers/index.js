import { ADD_USER, DELETE_USER, EDIT_USER } from '../actions';
//import store from '../store';
// let initialState =[];
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => initialState = users);

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
            return {...state, name: action.name };
        default: 
            return state;
    }
}

export default function reducer(state = [], action) {
    switch (action.type) {
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