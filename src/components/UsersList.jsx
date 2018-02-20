import React from 'react';
import SingleUser from './SingleUser';

class UsersList extends React.Component {
    
    componentDidMount() {
            this.props.getUsers();
        }

    render() {
        return(
            <div>
                {this.props.users.map((user) => {
                    return <SingleUser 
                        name={user.name} 
                        key={user.id}
                        deleteUser={this.props.deleteUser}
                        editUser={this.props.editUser}
                        id={user.id}
                    />
                })}
            </div>
        );
    }
}

export default UsersList;