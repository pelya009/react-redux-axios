import { connect } from 'react-redux';
 
import UsersList from '../components/UsersList';
import { deleteUser, editUser } from '../actions';

function mapStateToProps(state) {
    return {
        users: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onDelete: id => dispatch(deleteUser(id)),
        onEdit: (id, name) => dispatch(editUser(id, name))
    };
};

const UsersListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default UsersListContainer;