import React, {Component} from 'react'
import Button from '../../../styled/elements/button';

export default function step0(props) {
    return (
        <div>
            <div>
                Touch <Button onClick={props.nextStep}>Here</Button> to continue!
            </div>
        </div>
    )
}

