import styled from 'styled-components';
import MobileNavItem from './mobile-nav-item';
import MobileNavIcon from './mobile-nav-icon';


const MobileNavbar = styled.div`
    position: ${props => props.nav ? "fixed" : "block"};
    bottom: ${props => props.nav ? "0" : null};
    width: 100%;
    background-color: #f3f3f3;
`

MobileNavbar.MobileNavItem = MobileNavItem
MobileNavbar.MobileNavIcon = MobileNavIcon


export default MobileNavbar;