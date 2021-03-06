import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };
  }

    handleSubmit = event => {
      event.preventDefault();
      const { name } = this.state;

      if (name) {
        this.props.addUser(name);
        this.setState({ name: '' });
      }
    }

    handleChange = event => {
      const name = event.target.value;
      this.setState({ name });
    }

    render() {
      const disabled = !this.state.name;

      return (
        <form onSubmit={this.handleSubmit} className='addUserForm'>
          <input
            type='text'
            value={this.state.name}
            placeholder="What's new user's name?"
            onChange={this.handleChange}
          />
          <button type='submit' disabled={disabled}>Add new user</button>
        </form>
      );
    }
}

export default FormAdd;

FormAdd.propTypes = {
  addUser: PropTypes.func.isRequired,
};
