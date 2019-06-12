import React from 'react';

import Friend from './Friend';

const FriendsList = props => {
    return (
        <>
            {props.friends.map(friend => (
                <Friend friend={friend} key={friend.id} deleteHandler={props.deleteHandler} />
            ))}
        </>
    )
}

export default FriendsList;