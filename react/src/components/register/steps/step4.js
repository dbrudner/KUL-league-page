import React, {Component} from 'react';
import Input from '../../../styled/elements/input';
import Label from '../../../styled/elements/label'
import H3 from '../../../styled/elements/h3';
export default function Step2(props) {

    const {jerseyName, jerseyNumber, jerseyNumberBackup} = props.data;

    const handleChange = (name, value) => {
        props.handleChange("jerseySize", value)
    }

    return (
        <div>
            <div>
                <Label>Jersey Name</Label>
                <Input type="text" value={jerseyName} onChange={e => props.handleChange("jerseyName", e.target.value)}/>
            </div>
            <div>
                <Label>Jersey Number</Label>
                <Input type="number" value={jerseyNumber} onChange={e => props.handleChange("jerseyNumber", e.target.value)}/>
            </div>
            <div>
                <Label>Jersey Number backup</Label>
                <Input type="number" value={jerseyNumberBackup} onChange={e => props.handleChange("jerseyNumberBackup", e.target.value)}/>
            </div>
        </div>
    )
}