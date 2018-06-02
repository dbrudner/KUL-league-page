import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../styled/elements/button'
import H3 from '../../styled/elements/h3'

export default function UserNotRegistered(props) {
    return (
        <div>
            <H3 danger center fontSize="3.6rem">You are not registered for this season!</H3>
            <div class="text-center">
                <Link to="/register"><Button margin="2rem">Register</Button></Link>
            </div>
        </div>
    )
}