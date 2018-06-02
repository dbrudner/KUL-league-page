import styled from 'styled-components'

const H3 = styled.h3`
    font-size: ${props => props.fontSize || "2.4rem"};
    text-align: ${props => props.center ? "center" : null};
    color: ${props => props.danger ? props.theme.textDanger : null};
    margin: ${props => props.margin || null};
`

export default H3;