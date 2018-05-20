import styled from 'styled-components'

const Label = styled.label`
    display: block;
    margin-left: 10%;
    font-size: 1.8rem;
    font-weight: 700;

    ::after {
        content: ${props => props.question ? "?" : ":"};
    }
`

export default Label;