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
        />))}
      </div>
    );
  }
}

export default TodosList;
