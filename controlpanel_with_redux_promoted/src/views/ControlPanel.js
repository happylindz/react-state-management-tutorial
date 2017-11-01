import React, { Component } from 'react'
import Counter from './Counter'
import Summary from './Summary'
import PropTypes from 'prop-types'

class ControlPanel extends Component {
    render() {
        console.log(this.context.store)
        return (
            <div>
                {
                    Object.keys(this.context.store.getState()).map(caption => (<Counter caption={ caption } key={ caption }  />))
                }
                <Summary />
            </div>
        )
    }
}

ControlPanel.contextTypes = {
    store: PropTypes.object
}

export default ControlPanel