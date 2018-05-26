import styled from 'styled-components'

const LoginButton = styled.button`
    background-color: ${props => props.theme.colorPrimary}
    color: white;
    padding: 5px 20px;
    border-radius: 10px;
    display: inline-block;
    font-size: 24px;
    border: 0px solid white;

    :active {
        border: 0px
    }
`

export default LoginButton