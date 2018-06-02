import styled from 'styled-components'

const ContextHeader = styled.div`
    background-color: ${props => props.theme.bgSecondary}
    color: ${props => props.theme.textSecondary}
    position: fixed;
    top: 0;
    left: 0;
    height: 5rem;
    width: 100%;
    font-size: 2.4rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default ContextHeader;