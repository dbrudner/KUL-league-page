import React from 'react';
import { Link } from 'react-router-dom';
import P from '../../styled/elements/p'

export default function UserNotLoggedIn(props) {
    return (
        <div>
            <h3 className="text-center">You are not logged in!</h3>
            <div>
                <P center helper>
                    <Link to="/login">Click here to log in</Link>
                </P>
                <P center helper>
                    <Link to="/signup">Click here to sign up</Link>                
                </P>
            </div>
        </div>
    )
}