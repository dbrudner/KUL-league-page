import styled from 'styled-components'

const P = styled.p`
    font-style: ${props => props.helper ? "italic" : null};
    text-align: ${props => props.center ? "center" : null};
    font-size: 1.6rem;
    color: ${props => props.error ? props.theme.textDanger : null};
`

export default P;