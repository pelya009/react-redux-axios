import React from 'react';
import PropTypes from 'prop-types';

class SingleUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  componentDidUpdate() {
    if (this.state.editing) {
      this.name.focus();
    }
  }

    handleSubmit = event => {
      event.preventDefault();

      const name = this.name.value;

      this.props.editUser(this.props.id, name);
      this.setState({ editing: false });
    }

    handleDelete = () => {
      this.props.deleteUser(this.props.id);
    }

    handleEdit = () => {
      this.setState({ editing: true });
    }

    renderDisplay() {
      return (
        <div className='singleUser'>
          <span className='showUserName'>{this.props.name}</span>
          <button onClick={this.handleEdit}>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
          <button>ShowTodos</button>
        </div>
      );
    }

    renderForm() {
      return (
        <form onSubmit={this.handleSubmit} className='singleUser'>
          <input type='text' ref={c => { this.name = c; }} defaultValue={this.props.name} />
          <button type='submit'>Save</button>
        </form>
      );
    }

    render() {
      return this.state.editing ? this.renderForm() : this.renderDisplay();
    }
}

export default SingleUser;

SingleUser.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  editUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
};
