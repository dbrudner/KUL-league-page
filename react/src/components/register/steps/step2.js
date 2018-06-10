import React, {Component} from 'react'
import Select from '../../../styled/elements/select'
import H3 from '../../../styled/elements/h3'
import Slider from '../../../styled/blocks/slider'

export default function Step1(props) {

    const {experience, timePlayed, athleticism} = props.data

    console.log(props.data.experience);

    const renderItem = (value, name) => {
        return (
            <div>
                <H3 fontSize="3.2rem" margin="1rem 0">{name}</H3>
                    <div style={{fontSize: "1.4rem", display: "flex", justifyContent: "space-between", margin: "1rem"}}>
                        <div>Beginner</div>
                        <div style={{marginLeft: "-3rem"}}>Veteran</div>
                        <div>Pro</div>
                    </div>
                <Slider value={props.data[value]} onChange={e => props.handleChange(value, e.target.value)}/>
            </div>
        )
    }


    return (
        <div>
            {renderItem("experience", "Experience")}
            <hr/>
            {renderItem("timePlayed", "Time Played")}
            <hr/>
            {renderItem("athleticism", "Athleticism")}
        </div>
    )
}