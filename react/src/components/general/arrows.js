import React from 'react'
import ArrowsContainer from '../../styled/blocks/arrows/arrows-container'

export default function Arrows(props) {
    return (
        <ArrowsContainer>
            <ArrowsContainer.Arrow onClick={props.prev}>Prev</ArrowsContainer.Arrow>
            <ArrowsContainer.Arrow onClick={props.next}>Next</ArrowsContainer.Arrow>            
        </ArrowsContainer>
    )
}