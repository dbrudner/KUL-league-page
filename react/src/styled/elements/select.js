import styled from 'styled-components';


const Select = styled.select`
    width: 80%;
    margin-left: 10%;
    border-radius: 2px;
    border: 1px solid #d8d8d8;
    margin-bottom: 1rem;
    height: 4.8rem;
    padding-left: 2rem;
    font-size: 1.8rem;
    color: ${props => props.theme.textPrimary};
`

export default Select;