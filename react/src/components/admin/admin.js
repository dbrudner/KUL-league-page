import React, { Component } from 'react';
import SecondaryNav from '../../styled/blocks/secondary-nav'
import { Link } from 'react-router-dom'

export default class Admin extends Component {
    
    render() {
        return (
            <div>
                <SecondaryNav>
                    <SecondaryNav.NavList>
                        <Link to="/admin/schedule"><SecondaryNav.NavListItem>Modify Schedule</SecondaryNav.NavListItem></Link>
                        <SecondaryNav.NavListItem>Change Teams</SecondaryNav.NavListItem>                        
                    </SecondaryNav.NavList>
                </SecondaryNav>
            </div>            
        )
    }
}