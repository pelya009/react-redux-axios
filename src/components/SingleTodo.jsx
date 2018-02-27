import React from 'react';
import PropTypes from 'prop-types';

class SingleTodo extends React.Component {
  toggle = () => {
    this.props.toggleTodo(this.props.id);
  }

  render() {
    return (
      <div>
        <input
          type='checkbox'
          id={this.props.id}
          checked={this.props.completed}
          onChange={this.toggle}
        />
        <span>{this.props.title}</span>
      </div>
    );
  }
}

export default SingleTodo;

SingleTodo.propTypes = {
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};
