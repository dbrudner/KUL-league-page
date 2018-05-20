import styled from 'styled-components'

const P = styled.p`
    font-style: ${props => props.helper ? "italic" : null};
    text-align: ${props => props.center ? "center" : null};
    font-size: 1.6rem;
`

export default P;