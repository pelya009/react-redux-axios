import React from 'react';
import SingleUser from './SingleUser';

function UsersList(props) {
    return(
        <div>
            {props.users.map(user => {
                return <SingleUser 
                    name={user.name} 
                    key={user.id}
                    onDelete={props.onDelete}
                    onEdit={props.onEdit}
                    id={user.id}
                />
            })}
        </div>
    );
}

export default UsersList;