import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Summary = (props) => {
    const { value } = props
    return (
        <div>
            <hr />
            Total Count: { value }
        </div>
    )
}

class SummaryCounter extends Component {
    constructor() {
        super(...arguments)
        this.state = this.getOwnState()
    }
    getOwnState = () => {
        let total = 0
        const state = this.context.store.getState()
        for(let key in state) {
            if(state.hasOwnProperty(key)) {
                total += state[key]
            }
        }
        return {
            value: total
        }
    }
    
    onSummaryUpdate = () => {
        this.setState(this.getOwnState())
    }

    componentDidMount() {
        this.context.store.subscribe(this.onSummaryUpdate)
    }
    
    render() {
        return (
            <Summary value={ this.state.value } />
        )
    }
}

SummaryCounter.contextTypes = {
    store: PropTypes.object
}

export default SummaryCounter