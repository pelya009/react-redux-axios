import { connect } from 'react-redux';
 
import UsersList from '../components/UsersList';
import { getUsers, deleteUser, editUser } from '../actions';

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onDelete: id => dispatch(deleteUser(id)),
        onEdit: (id, name) => dispatch(editUser(id, name)),
        onGet: names => dispatch(getUsers(names))
    };
};

const UsersListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default UsersListContainer;