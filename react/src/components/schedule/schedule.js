import React, { Component } from 'react';
import axios from 'axios';
import ScheduleNav from './schedule-nav';
import Header from '../../styled/elements/header'

export default class Schedule extends Component {
    constructor(props) {
        super(props);

        this.state = {
            schedule: null
        }
    }

    componentDidCatch() {
        axios.get('/schedule')
        .then(res => {
            this.setState({schedule: res.data})
        })
    }

    render() {
        return (
            <div>
                <ScheduleNav/>
                <Header>Schedule</Header>
            </div>
        )
        
    }
}