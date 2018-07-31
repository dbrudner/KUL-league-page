import styled from 'styled-components';

const MobileNavItem = styled.div`
    display: inline-block;
    color: ${props => props.active ? "white" : "#1f1f1f"};
    background-color: #0c0c1d;
    height: 90px;
    width: 25%;
    text-align: center;
    padding: 10px;
    font-size: 16px;
    padding-bottom: 20px;

`

export default MobileNavItem;