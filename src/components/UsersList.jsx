import React from 'react';
import SingleUser from './SingleUser';

class UsersList extends React.Component {

    render() {
        return(
            <div>
                {this.props.users.map(user => {
                    return <SingleUser 
                        name={user.name} 
                        key={user.id}
                        onDelete={this.props.onDelete}
                        onEdit={this.props.onEdit}
                        id={user.id}
                    />
                })}
            </div>
        );
    }
}

export default UsersList;