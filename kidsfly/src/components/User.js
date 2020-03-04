import React from 'react';

const User = props => {
    return (
        <div className='user_card'>
            <p>First Name:{props.first_name}</p>
            <p>Last Name:{props.last_name}</p>
            <p>Phone Number: {props.phone}</p>
            <p>Address: {props.address}</p>
            <p>Address 2: {props.address2}</p>
            <p>Home Airport: {props.home_airport}</p>
            <p>Username: {props.username}</p>
            <p>Password: {props.password}</p>
        </div>
    )
}

export default User;