import React, {Component} from 'react'
import Select from '../../../styled/elements/select'
import H3 from '../../../styled/elements/h3'
import Slider from '../../../styled/blocks/slider'

export default function Step1(props) {

    const {experience, timePlayed, athleticism} = props.data

    console.log(props.data.experience);

    return (
        <div>
            <div>
                <H3 fontSize="3.2rem" margin="1rem 0">Experience</H3>
                <div style={{fontSize: "1.4rem", display: "flex", justifyContent: "space-between", margin: "1rem"}}>
                    <div>Beginner</div>
                    <div style={{marginLeft: "-3rem"}}>Veteran</div>
                    <div>Pro</div>
                </div>
                <Slider value={props.data.experience} onChange={e => props.handleChange("experience", e.target.value)}/>
            </div>
            <hr/>
            <div>
                <H3 fontSize="3.2rem" margin="1rem 0">Time Played</H3>
                <div style={{fontSize: "1.4rem", display: "flex", justifyContent: "space-between", margin: "1rem"}}>
                    <div>Beginner</div>
                    <div style={{marginLeft: "-3rem"}}>Veteran</div>
                    <div>Pro</div>
                </div>
                <Slider value={props.data.timePlayed} onChange={e => props.handleChange("timePlayed", e.target.value)}/>
            </div>
            <hr/>
            <div>
                <H3 fontSize="3.2rem" margin="1rem 0">Athleticism</H3>
                <div style={{fontSize: "1.4rem", display: "flex", justifyContent: "space-between", margin: "1rem"}}>
                    <div>Beginner</div>
                    <div style={{marginLeft: "-3rem"}}>Veteran</div>
                    <div>Pro</div>
                </div>
                <Slider value={props.data.athleticism} onChange={e => props.handleChange("athleticism", e.target.value)}/>
            </div>
        </div>
    )
}