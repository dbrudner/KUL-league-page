import React, { Component } from 'react';
import MobileNavItem from './mobile-nav-item';
import MobileNavbar from '../../../styled/blocks/mobile-navbar';
import SlideMenu from '../../slide-menu/slide-menu';
import { Link } from 'react-router-dom'

export default class MobileNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSlideMenuOpen: false,       
        }
    }

    // Opens and closes slider
    openSlider = bool => {this.setState({isSlideMenuOpen: bool})}

    closeSlideMenu = () => {
        if (this.state.isSlideMenuOpen) {
            this.setState({isSlideMenuOpen: false})
        }
    }

    render() {
        return (
            <MobileNavbar nav>
                <Link to="/"><MobileNavItem to="Home" icon="fas fa-home" /></Link>
                <Link to="/schedule"><MobileNavItem to="Schedule" icon="far fa-calendar-alt" /></Link>
                <Link to="/stats"><MobileNavItem to="Stats" icon="fas fa-table" /></Link>
                <MobileNavItem to="More" icon="fas fa-bars" />
            </MobileNavbar>
        )
    }
}
