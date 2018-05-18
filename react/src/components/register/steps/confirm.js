import React, {Component} from 'react'
import Input from '../../../styled/elements/input';

export default function Confirm(props) {

    // const {firstName, lastName, gender, age} = this.props.data;

    const renderUserInfo = () => {
        return Object.keys(props.data).map(key => {
            return (
                <div>{key}: {props.data[key]}</div>
            )
        })
    }


    return (
        <div>
            {renderUserInfo()}
        </div>
    )
}