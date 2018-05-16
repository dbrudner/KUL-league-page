import React, { Component } from 'react';
import Nav from '../../styled/blocks/nav';
import SlideMenu from '../slide-menu/slide-menu';

export default class Navbar extends Component {
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
            console.log('hi');            
            this.setState({isSlideMenuOpen: false})
        }
    }

    render() {
        return (
            <Nav onClick={e => this.closeSlideOut}>
                <SlideMenu closeSlideMenu={this.closeSlideMenu} isOpen={this.state.isSlideMenuOpen}/>
                <Nav.Brand>
                    League
                </Nav.Brand>
                <Nav.NavList>
                    <Nav.NavListItem onClick={() => this.openSlider(true)}><i className="fas fa-bars"></i></Nav.NavListItem>
                </Nav.NavList>
            </Nav>
        )
        
    }
}
