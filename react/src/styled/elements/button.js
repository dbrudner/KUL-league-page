import styled from 'styled-components'

const Button = styled.button`
    background-color: ${props => props.backgroundColor ? props.theme.colorPrimary: props.backgroundColor};
    color: ${props => props.backgroundColor ? props.theme.colorPrimary: props.backgroundColor};
    padding: 5px 20px;
    border-radius: 10px;
    display: inline-block;
    font-size: 36px;
    border: 0px solid white;
    margin: ${props => props.margin || 0}

    :active {
        border: 0px
    }
`

export default Button