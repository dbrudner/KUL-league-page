import styled from 'styled-components'

const Header = styled.h1`
    font-size: 3.2rem;
    text-align: ${props => props.center ? "center" : null};
    text-align: center;
`

export default Header;