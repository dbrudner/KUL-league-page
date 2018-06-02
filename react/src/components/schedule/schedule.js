import React, { Component } from 'react';
import axios from 'axios';
import ScheduleNav from './schedule-nav';
import Header from '../../styled/elements/header'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeSiteContext } from '../../actions/index';

class Schedule extends Component {
    constructor(props) {
        super(props);

        this.state = {
            schedule: null
        }
    }

    componentDidMount() {

        this.props.changeSiteContext("Schedule");

        axios.get('/schedule')
        .then(res => {
            this.setState({schedule: res.data})
        })
    }

    render() {
        return (
            <div>
                <Header>Schedule</Header>                
                <ScheduleNav/>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Schedule)