import styled from 'styled-components';

const SwitchButton = styled.div`
    display: inline-block;
    width: 45%;
    font-size: 1.6rem;
    text-align: center;
    color: white;
    background-color: ${props => props.active ? "#7cc684" : props.theme.lightGray};
    color: ${props => props.active ? "white" : "black"};    
    padding: 2rem 0;
`

export default SwitchButton;