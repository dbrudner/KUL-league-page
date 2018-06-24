import styled from 'styled-components'

const Button = styled.button`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : props.theme.colorPrimary };
    color: ${props => props.color ? props.color : "white" };
    margin: ${props => props.margin || 0};
`

export default Button