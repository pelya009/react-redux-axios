import React from 'react';
import PropTypes from 'prop-types';
import SingleTodo from './SingleTodo';

class TodosList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (<SingleTodo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          toggleTodo={this.props.toggleTodo}
        />))}
      </div>
    );
  }
}

export default TodosList;

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};
