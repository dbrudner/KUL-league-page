import styled from 'styled-components';
import SlideMenuList from './slide-menu-list';
import SlideMenuListItem from './slide-menu-list-item';


const SlideMenuContainer = styled.div`
    position: fixed;
    width: ${props => props.isOpen ? "100%" : 0};
    z-index:  ${props => props.isOpen ? 1 : 0};
    display: ${props => props.isOpen ? "block" : "none"};
    height: 50%;
    background-color: #f3f3f3;
`

SlideMenuContainer.List = SlideMenuList
SlideMenuContainer.ListItem = SlideMenuListItem

export default SlideMenuContainer