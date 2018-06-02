import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../styled/elements/button'

export default function UserNotLoggedIn(props) {
    return (
        <div>
            <h3 className="text-center">You are not logged in!</h3>
            <div class="text-center">
                <div>
                    <Link to="/login"><Button margin="2rem">Login</Button></Link>
                </div>
                <div>
                    <Link to="/signup"><Button margin="2rem">Sign Up</Button></Link>                
                </div>
            </div>
        </div>
    )
}