import React from 'react';
import PropTypes from 'prop-types';
import SingleUser from './SingleUser';

class UsersList extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div>
        {console.log(this.props.users)}
        {this.props.users.map(user => (<SingleUser
          name={user.name}
          key={user.id}
          deleteUser={this.props.deleteUser}
          editUser={this.props.editUser}
          id={user.id}
        />))}
      </div>
    );
  }
}

export default UsersList;

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  getUsers: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
};
