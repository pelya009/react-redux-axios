import { connect } from 'react-redux';

import UsersList from '../components/UsersList';
import { getUsers, deleteUser, editUser, getTodos } from '../actions';

const mstp = ({ usersReducer: { users } }) => ({ users });

const mdtp = {
  deleteUser,
  editUser,
  getUsers,
  getTodos,
};

const UsersListContainer = connect(mstp, mdtp)(UsersList);

export default UsersListContainer;
