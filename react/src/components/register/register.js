import React, {Component} from 'react'
import Header from '../..//styled/elements/header';
import Button from '../../styled/elements/button';

import Step0 from './steps/step0';
import Step1 from './steps/step1';
import Confirm from './steps/confirm';

import Arrows from '../general/arrows';


import axios from 'axios'

export default class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            step: 0,
            // Step 1 Form
            firstName: 'First Name',
            lastName:'Last Name',
            gender: "Female",
            age: 26,
            
            
            // Step 2
            jerseySize: '',
            jerseyName: '',
            jerseyNumber: 0,
            jerseyNumberBackup: 0,
            // Step 3
            email: '',
            phone: '',
            referral: '',
            // Step 4
            height: 0,
        }
    }

    nextStep = () => this.setState({step: this.state.step + 1})
    prevStep = () => this.setState({step: this.state.step - 1})

    handleChange = (name, value) => this.setState({[name]: value})

    render() {
        if (this.state.step === 0) return <Step0 nextStep={this.nextStep} />
        if (this.state.step === 1) return <div><Step1 data={this.state} nextStep={this.nextStep} prevStep={this.prevStep} /><Arrows next={this.nextStep} prev={this.prevStep}/></div>
        // if (this.state.step === 2) return <div><Step2 data={this.state} nextStep={this.nextStep} prevStep={this.prevStep} /><Arrows next={this.nextStep} prev={this.prevStep}/></div>
        if (this.state.step === 2) return <Confirm data={this.state} />
    }
}