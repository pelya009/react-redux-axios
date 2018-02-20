import { GET_USERS, ADD_USER, DELETE_USER, EDIT_USER } from '../actions';

const initialState = {
    users: [],
    nextId: 0
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                users: action.users,
                nextId: action.users.length
            };

        case ADD_USER:
            const user = { 
                id: action.id,
                name: action.name 
            };
            return {...state, users: [...state.users, user], nextId: state.nextId + 1 };
        
        case DELETE_USER:
            return {
                users: state.users.filter(user => {
                    return user.id !== action.id;
                })
            }

        case EDIT_USER:
            return {
                users: state.users.map(user => {
                        if (user.id !== action.id) {
                            return user;
                        }
                        return {...state, name: action.name };
                        })
            }

        default:
            return state;
    }
}
