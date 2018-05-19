import React, {Component} from 'react'
import Input from '../../../styled/elements/input';

export default function Step2(props) {

    const {jerseySize, jerseyName, jerseyNumber, jerseyNumberBackup} = props.data;

    return (
        <div>
            <div>
                <label>Jersey Size</label>
                <Input type="text" value={jerseySize} onChange={e => props.handleChange("jerseySize", e.target.value)}/>                    
            </div>
            <div>
                <label>Jersey Name</label>
                <Input type="text" value={jerseyName} onChange={e => props.handleChange("jerseyName", e.target.value)}/>
            </div>
            <div>
                <label>Jersey Number</label>
                <Input type="text" value={jerseyNumber} onChange={e => props.handleChange("jerseyNumber", e.target.value)}/>
            </div>
            <div>
                <label>Jersey Number backup</label>
                <Input type="number" value={jerseyNumberBackup} onChange={e => props.handleChange("jerseyNumberBackup", e.target.value)}/>        
            </div>
        </div>
    )
}