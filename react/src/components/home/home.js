import React from 'react'
import Button from '../../styled/elements/button'
import {Link} from 'react-router-dom'

export default function Home(props) {
    return (
        <div>
            <Link to="/login"><Button>Login</Button></Link>
        </div>
    )
}