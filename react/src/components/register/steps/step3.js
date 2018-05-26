import React, {Component} from 'react'
import Input from '../../../styled/elements/input';
import Label from '../../../styled/elements/label'

export default function Step2(props) {

    const {jerseySize, jerseyName, jerseyNumber, jerseyNumberBackup} = props.data;

    return (
        <div>
            <div>
                <Label>Jersey Size</Label>
                <Input autoFocus type="text" value={jerseySize} onChange={e => props.handleChange("jerseySize", e.target.value)}/>                    
            </div>
            <div>
                <Label>Jersey Name</Label>
                <Input type="text" value={jerseyName} onChange={e => props.handleChange("jerseyName", e.target.value)}/>
            </div>
            <div>
                <Label>Jersey Number</Label>
                <Input type="text" value={jerseyNumber} onChange={e => props.handleChange("jerseyNumber", e.target.value)}/>
            </div>
            <div>
                <Label>Jersey Number backup</Label>
                <Input type="number" value={jerseyNumberBackup} onChange={e => props.handleChange("jerseyNumberBackup", e.target.value)}/>        
            </div>
        </div>
    )
}