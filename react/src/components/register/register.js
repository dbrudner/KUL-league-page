import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Swipe from 'react-easy-swipe';
import Header from '../..//styled/elements/header';
import Button from '../../styled/elements/button';
import P from '../../styled/elements/p';
import Step0 from './steps/step0';
import Step1 from './steps/step1';
import Step2 from './steps/step2';
import Step3 from './steps/step3';
import Step4 from './steps/step4';
import InfoCheck from './steps/info-check';
import Confirm from './steps/confirm';
import Arrows from '../general/arrows';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeSiteContext } from '../../actions/index';


class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            step: 0,
            user: null,
            // Step 1 - Basic Information
            firstName: '',
            lastName:'',
            gender: "",
            age: 1,
            height: 1,

            // Step 1 - Player skill/experience
            experience: '',
            timePlayed: '',
            athleticism: '',

            // Step 2 - Jersey Info
            jerseySize: '',
            jerseyName: '',
            jerseyNumber: '',
            jerseyNumberBackup: '',
            jerseySize: '',
            jerseyStyle: 'Sleeves',

            // Step 3 - Contact
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

    componentDidMount() {

        console.log(this.props);

        axios.get('/test')
        .then(res => {
            const {_id, isRegistered} = res.data;
            this.setState({user: _id, isRegistered})
        })
    }

    handleSubmit = () => {
        const registrationInfo = {...this.state};
        delete registrationInfo.step;
        delete registrationInfo.user;
        axios.post('/register', {registrationInfo, user: this.state.user})
        .then(res => {
            console.log(res);
        })
    }

    nextStep = () => {if (this.state.step < 6) this.setState({step: this.state.step + 1})};
    prevStep = () => {if (this.state.step > 0) this.setState({step: this.state.step - 1})};

    handleChange = (name, value) => this.setState({[name]: value})

    renderStep = () => {
        if (this.state.step === 0) return <Step0 nextStep={this.nextStep} />
        if (this.state.step === 1) return <Step1 handleChange={this.handleChange} data={this.state} nextStep={this.nextStep} prevStep={this.prevStep} />
        if (this.state.step === 2) return <Step2 data={this.state} nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} />
        if (this.state.step === 3) return <Step3 data={this.state} nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} />
        if (this.state.step === 4) return <Step4 data={this.state} nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} />
        if (this.state.step === 5) return <InfoCheck data={this.state} />
        if (this.state.step === 6) return <Confirm />
    }

    renderHeader = () => {
        return (
            <div style={{marginBottom: "3rem", marginTop: "2rem"}}>
                <Header>League Registration</Header>
                <P center helper>{this.state.step + 1}/5</P >
            </div>
        )
    }

    render() {
        this.props.changeSiteContext("Registration");

        if (this.state.isRegistered) return <h3 className="text-center">You are already registered!</h3>

        if (!this.state.user) return (
            <div>
                <h3 className="text-center">Log in before you register!</h3>
                <P center helper>Click <Link to="/login">here</Link> to login</P>
            </div>
        )

        return (
            <Swipe
                // onSwipeRight={this.prevStep}
                // onSwipeLeft={this.nextStep}
            >
                {this.renderHeader()}
                {this.renderStep()}
                {this.state.step < 5 ? <Arrows next={this.nextStep} prev={this.prevStep} /> : <Arrows handleSubmit={this.handleSubmit} next={this.nextStep} prev={this.prevStep} submit/>}
            </Swipe>
        )
    }
}

function mapStateToProps(state) {
    return {
        state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeSiteContext}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)