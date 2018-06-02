import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeSiteContext } from '../../actions/index';

class Stats extends Component {

    componentDidMount() {
        this.props.changeSiteContext("Stats");
    }

    render() {
        return (
            <h1>Stats</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Stats)