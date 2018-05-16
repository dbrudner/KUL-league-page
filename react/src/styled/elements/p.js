import styled from 'styled-components'

const P = styled.p`
    font-style: ${props => props.helper ? "italic" : null}
`

export default P;