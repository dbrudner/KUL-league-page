import React, { Component } from 'react';
import Tabs from '../../styled/blocks/tabs'
import axios from 'axios';

export default class ScheduleNav extends Component {

    constructor(props) {
        super(props);
        this.state = {active: null}
    }

    componentDidMount() {
        axios.get("/schedule")
        .then(res => console.log(res));
    }

    changeTab = name => this.setState({active: name})

    isActive = name => this.state.active === name

    render() {
        return (
            <div>
                <Tabs>
                    <Tabs.Tab isActive={this.isActive("all")} onClick={() => this.changeTab("all")} numberOfTabs={3}>All</Tabs.Tab>
                    <Tabs.Tab isActive={this.isActive("current")} onClick={() => this.changeTab("current")} numberOfTabs={3}>Past</Tabs.Tab>
                    <Tabs.Tab isActive={this.isActive("upcoming")} onClick={() => this.changeTab("upcoming")} numberOfTabs={3}>Upcoming</Tabs.Tab>
                </Tabs>
            </div>
        )
    }
}