import React, {Component} from 'react'
import Input from '../../../styled/elements/input';
import Label from '../../../styled/elements/label';
import Switch from '../../../styled/blocks/switch';

export default function Step1(props) {

    const {firstName, lastName, gender, age, height} = props.data

    return (
        <div>
            <div>
                <Label>First Name</Label>
                <Input autoFocus type="text" value={firstName} onChange={e => props.handleChange("firstName", e.target.value)}/>                    
            </div>
            <div>
                <Label>Last Name</Label>                
                <Input type="text" value={lastName} onChange={e => props.handleChange("lastName", e.target.value)}/>
            </div>
            <div>
                <Label>Age</Label>
                <Input type="number" value={age} onChange={e => props.handleChange("age", e.target.value)}/>        
            </div>
            <div>
                <Label>Gender</Label>                
                <Switch>
                    <Switch.SwitchButton onClick={() => props.handleChange("gender", "Male")} active={gender === 'Male' ? true : false}>Male</Switch.SwitchButton>
                    <Switch.SwitchButton onClick={() => props.handleChange("gender", "Female")} active={gender === 'Female' ? true : false}>Female</Switch.SwitchButton>                    
                </Switch>
                {/* <Input type="text" value={gender} onChange={e => props.handleChange("gender", e.target.value)}/>                 */}
            </div>
        </div>
    )
}