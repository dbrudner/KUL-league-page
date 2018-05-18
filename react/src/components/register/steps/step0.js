import React, {Component} from 'react'
import Header from '../../..//styled/elements/header';
import Button from '../../../styled/elements/button';

export default function step0(props) {
    return (
        <div>
            <Header>League Registration</Header>
            <div>
                Touch <Button onClick={props.nextStep}>Here</Button> to continue!
            </div>
        </div>
    )
}

