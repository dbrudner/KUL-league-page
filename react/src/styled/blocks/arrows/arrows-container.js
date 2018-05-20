import styled from 'styled-components'
import Arrow from './arrow';

const ArrowsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2rem 10%;
    font-size: 3.6rem;
`

ArrowsContainer.Arrow = Arrow;

export default ArrowsContainer;