import styled from 'styled-components'
import Arrow from './arrow';

const ArrowsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: -2rem;
    font-size: 3.6rem;
    position: ${props => props.fixed ? "fixed" : null};
    bottom: ${props => props.fixed ? "90px" : null};
    background-color: ${props => props.theme.lightGray};
`

ArrowsContainer.Arrow = Arrow;

export default ArrowsContainer;