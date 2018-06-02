import React, {Component} from 'react'
import ContextHeader from '../../styled/blocks/context-header'
import {connect} from 'react-redux'

class SiteContext extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props);
        
    }

    render() {

        return (
            <ContextHeader>
                {this.props.state.siteContext}
            </ContextHeader>
        )
    }
}

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps)(SiteContext)