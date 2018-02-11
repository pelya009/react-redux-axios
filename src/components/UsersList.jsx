import React from 'react';
import SingleUser from './SingleUser';

function UsersList(props) {
    return(
        <div>
            {props.users.map((user, key) => {
                return <SingleUser 
                    name={user.name} 
                    key={key}
                    onDelete={props.onDelete}
                    onEdit={props.onEdit}
                    id={user.id}
                />
            })}
        </div>
    );
}

export default UsersList;