import React, { Component } from 'react';
import axios from 'axios'
import ScheduleTable from './schedule-table'
import DesktopInput from '../../../styled/elements/desktop-input'

export default class AdminSchedule extends Component {

    componentDidMount() {
        axios.get("/schedule")
        .then(res => console.log(res));
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>Manage Schedule</h1>
                <h2>Current Schedule</h2>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <ScheduleTable />
                </div>
            </div>
        )
    }
}