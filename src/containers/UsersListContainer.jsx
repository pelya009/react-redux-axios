import { connect } from 'react-redux';
 
import UsersList from '../components/UsersList';
import { getUsers, deleteUser, editUser } from '../actions';

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

const mapDispatchToProps = {
        deleteUser,
        editUser,
        getUsers
};

const UsersListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default UsersListContainer;