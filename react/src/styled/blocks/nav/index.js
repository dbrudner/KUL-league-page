import styled from 'styled-components';
import NavList from './nav-list';
import NavListItem from './nav-list-item'
import Brand from './nav-brand';

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
`

Nav.Brand = Brand;
Nav.NavList = NavList;
Nav.NavListItem = NavListItem;

export default Nav;