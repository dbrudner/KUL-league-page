import React, {Component} from "react";
import Tab from './tab'

export default class Tabs extends Component {

    constructor(props) {
        super(props)

        this.state = {active: null}
    }

    handleChange = value => {
        this.setState({active: value})
        this.props.handleChange(value);
    }

    renderTabs = () => {
        return this.props.tabs.map(tab => {
            return (
                <Tab width={100/this.props.tabs.length} key={tab.value} name={tab.name} active={this.state.active === tab.value ? true : null} handleClick={() => this.handleChange(tab.value)} />
            )
        })
    }

    render() {
        console.log(this.state.active);
        return (
            <div>
                {this.renderTabs()}
            </div>
        )
        
    }
}