import { connect } from 'react-redux';

import UsersList from '../components/UsersList';
import { getUsers, deleteUser, editUser } from '../actions';

const mstp = ({ users }) => ({ users });

const mdtp = {
  deleteUser,
  editUser,
  getUsers,
};

const UsersListContainer = connect(mstp, mdtp)(UsersList);

export default UsersListContainer;
