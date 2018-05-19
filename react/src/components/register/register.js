import React, {Component} from 'react'
import Header from '../..//styled/elements/header';
import Button from '../../styled/elements/button';

import Step0 from './steps/step0';
import Step1 from './steps/step1';
import Step2 from './steps/step2';
import Step3 from './steps/step3';
import Confirm from './steps/confirm';

import Arrows from '../general/arrows';


import axios from 'axios'

export default class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            step: 0,
            // Step 1 - Basic Information
            firstName: 'First Name',
            lastName:'Last Name',
            gender: "Female",
            age: 26,
            height: 0,

            // Step 1 - Player skill/experience
            experience: '',
            timePlayed: '',
            athleticism: '',

            // Step 2 - Jersey Info
            jerseySize: '',
            jerseyName: '',
            jerseyNumber: 0,
            jerseyNumberBackup: 0,
            jerseySize: 'm',
            jerseyStyle: 'Sleeves',

            // Step 3 - Contact
            email: '',
            phone: '',
            referral: '',

            // Step 4 - Contact
            bestWayToContact: '',
            id: '',
            socialInterest: 1,
            ultimateInterest: 1,
            // availability: null

            // step 5 - Swag
        }
    }

    nextStep = () => this.setState({step: this.state.step + 1})
    prevStep = () => this.setState({step: this.state.step - 1})

    handleChange = (name, value) => this.setState({[name]: value})

    handleSelectChange = (name, event) => {
        console.log(event);
        console.log(name);
    }

    render() {
        console.log(this.state);

        if (this.state.step === 0) return <Step0 nextStep={this.nextStep} />
        if (this.state.step === 1) return <div><Step1 data={this.state} nextStep={this.nextStep} prevStep={this.prevStep} /><Arrows next={this.nextStep} prev={this.prevStep}/></div>
        if (this.state.step === 2) return <div><Step2 data={this.state} nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} /><Arrows next={this.nextStep} prev={this.prevStep}/></div>
        if (this.state.step === 2) return <div><Step3 data={this.state} nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} /><Arrows next={this.nextStep} prev={this.prevStep}/></div>
        if (this.state.step === 3) return <div><Confirm data={this.state} /><Arrows next={this.nextStep} prev={this.prevStep}/></div>
    }
}