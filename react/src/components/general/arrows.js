import React from 'react'
import ArrowsContainer from '../../styled/blocks/arrows/arrows-container'

export default function Arrows(props) {

    const handleSubmit = () => {
        props.handleSubmit();
    }

    if (props.submit) {
        return (
            <ArrowsContainer fixed={props.fixed}>
                <ArrowsContainer.Arrow onClick={props.prev}><i className="fas fa-angle-left"></i> Prev</ArrowsContainer.Arrow>
                <ArrowsContainer.Arrow onClick={() => handleSubmit()}>Send <i className="far fa-paper-plane"></i></ArrowsContainer.Arrow>            
            </ArrowsContainer>
        )
    }

    return (
        <ArrowsContainer fixed={props.fixed}>
            <ArrowsContainer.Arrow onClick={props.prev}><i className="fas fa-angle-left"></i> Prev</ArrowsContainer.Arrow>
            <ArrowsContainer.Arrow onClick={props.next}>Next <i className="fas fa-angle-right"></i></ArrowsContainer.Arrow>            
        </ArrowsContainer>
    )
}