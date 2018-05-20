import React from 'react';
import { Link } from 'react-router-dom';
import P from '../../styled/elements/p'

export default function UserNotRegistered(props) {
    return (
        <div>
            <h3 className="text-center">You are not registered for this season!</h3>
            <P center helper>Click <Link to="/register">here</Link> to register</P>
        </div>
    )
}