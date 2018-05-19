import React, {Component} from 'react'
import Input from '../../../styled/elements/input';

export default function Step1(props) {

    const {firstName, lastName, gender, age, height} = props.data

    return (
        <div>
            <div>
                <Input type="text" value={firstName} onChange={e => props.handleChange("firstName", e.target.value)}/>                    
            </div>
            <div>
                <Input type="text" value={lastName} onChange={e => props.handleChange("lastName", e.target.value)}/>
            </div>
            <div>
                <Input type="text" value={gender} onChange={e => props.handleChange("gender", e.target.value)}/>
            </div>
            <div>
                <Input type="number" value={age} onChange={e => props.handleChange("age", e.target.value)}/>        
            </div>
            <div>
                <Input type="text" value={height} onChange={e => props.handleChange("height", e.target.value)}/>        
            </div>
        </div>
    )
}