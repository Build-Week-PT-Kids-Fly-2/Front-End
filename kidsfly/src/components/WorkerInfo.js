import React from 'react';

const WorkerInfo = props => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Email: {props.age}</p>
            <p>Username: {props.email}</p>
        </div>
    )
}

export default WorkerInfo;