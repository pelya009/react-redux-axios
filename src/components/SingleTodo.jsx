import React from 'react';
import PropTypes from 'prop-types';

class SingleTodo extends React.Component {
  render() {
    return(
      <div>
        <span>{this.props.title}</span>
        <input type='checkbox' />
      </div>
    );
  }
}

export default SingleTodo;
