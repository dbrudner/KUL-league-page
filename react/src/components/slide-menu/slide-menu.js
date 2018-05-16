import React, { Component } from 'react';
import SlideMenuContainer from '../../styled/blocks/slide-menu';
import onClickOutside from "react-onclickoutside";

class SlideMenu extends Component {

    handleClickOutside = evt => {
        this.props.closeSlideMenu();
    };

    render() {
        return (
            <SlideMenuContainer isOpen={this.props.isOpen}>
                <SlideMenuContainer.List>
                    <SlideMenuContainer.ListItem>Login</SlideMenuContainer.ListItem>
                    <SlideMenuContainer.ListItem>Sign up</SlideMenuContainer.ListItem>                    
                </SlideMenuContainer.List>
            </SlideMenuContainer>
        )
    }
}

export default onClickOutside(SlideMenu);