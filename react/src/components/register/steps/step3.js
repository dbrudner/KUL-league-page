import React, {Component} from 'react';
import Input from '../../../styled/elements/input';
import Label from '../../../styled/elements/label'
import H3 from '../../../styled/elements/h3';
import Slider from '../../../styled/blocks/slider';
import Tabs from '../../general/tabs/tabs';

export default function Step2(props) {

    const {jerseySize, jerseyName, jerseyNumber, jerseyNumberBackup} = props.data;

    const jerseySizes = [
        {name: "XS", value: "xs"},
        {name: "S", value: "s"},
        {name: "M", value: "m"},
        {name: "L", value: "l"},
        {name: "XL", value: "xl"},
        {name: "2XL", value: "2xl"},
    ]

    const jerseyStyles = [
        {name: "Sleeves", value: "sleeves"},
        {name: "Sleeveless", value: "sleeveless"}
    ]

    const handleSizeChange = value => {
        props.handleChange("jerseySize", value)
    }

    return (
        <div>
            <img style={{marginLeft: "10%", transform: "translateY(-3rem)"}} width="80%" src="https://lh3.googleusercontent.com/O38hXu_vS_bbacI8ZB-CkJivi6pLZ4HeT-1Ifc0RJMNRkOiu0KGtib2gc98IFOxDVQJyxjXEuQ=w740" />
            <hr/>
            <div>
                <Tabs handleChange={handleSizeChange} tabs={jerseySizes} />
            </div>
        </div>
    )
}