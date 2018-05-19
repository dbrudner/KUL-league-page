import styled from 'styled-components';

const MobileNavItem = styled.div`
    display: inline-block;
    color: ${props => props.active ? "white" : "black"};
    background-color: ${props => props.active ? "black" : "#f3f3f3"};    
    height: 90px;
    width: 25%;
    text-align: center;
    padding: 10px;
    font-size: 16px;
    padding-bottom: 20px;

`

export default MobileNavItem;