import styled from 'styled-components'

const Header = styled.h1`
    font-size: 4.8rem;
    text-align: ${props => props.center ? "center" : null};
`

export default Header;