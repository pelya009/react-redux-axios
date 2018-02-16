import { GET_USERS, ADD_USER, DELETE_USER, EDIT_USER } from '../actions';

export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_USERS:
            return action.users;

        case ADD_USER:
            const user = { 
                id: action.id,
                name: action.name 
            };
            return [...state, user];
        
        case DELETE_USER:
            const index = state.findIndex(user => user.id === action.id);

            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];

        case EDIT_USER:
            return state.map(user => {
                if (user.id !== action.id) {
                    return user;
                }
                return {...state, name: action.name };
                });

        default:
            return state;
    }
}
