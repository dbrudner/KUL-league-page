import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../styled/elements/button'

export default function UserNotLoggedIn(props) {
	return (
		<div>
			<div class="text-center">
				<div>
					<Link to="/login"><Button backgroundColor="transparent" border="1px solid white" width="80%" margin="2rem">Login</Button></Link>
				</div>
				<div>
					<Link to="/signup"><Button backgroundColor="transparent" width="80%" margin="2rem">Sign Up</Button></Link>
				</div>
			</div>
		</div>
	)
}