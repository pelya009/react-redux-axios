import { connect } from 'react-redux';
import TodosList from '../components/TodosList';

import { toggleTodo } from '../actions';

const mstp = ({ todosReducer: { todos } }) => ({ todos });

const mdtp = {
  toggleTodo,
};

const TodosListContainer = connect(mstp, mdtp)(TodosList);

export default TodosListContainer;
