import React, { Component } from 'react';
import SlideMenuContainer from '../../styled/blocks/slide-menu';
import onClickOutside from "react-onclickoutside";
import {Link} from 'react-router-dom';
class SlideMenu extends Component {

    handleClickOutside = evt => {
        this.props.closeSlideMenu();
    };

    render() {
        return (
            <SlideMenuContainer isOpen={this.props.isOpen}>
                <SlideMenuContainer.List onClick={this.props.closeSlideMenu}>
                    <Link to="/login"><SlideMenuContainer.ListItem>Login</SlideMenuContainer.ListItem></Link>
                    <Link to="/signup"><SlideMenuContainer.ListItem>Sign up</SlideMenuContainer.ListItem></Link>
                    <Link to="/signup"><SlideMenuContainer.ListItem>Schedule</SlideMenuContainer.ListItem></Link>
                </SlideMenuContainer.List>
            </SlideMenuContainer>
        )
    }
}

export default onClickOutside(SlideMenu);