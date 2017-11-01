import React, { Component } from 'react'
import Counter from './Counter'
import Summary from './Summary'
import controller from '../controller'

export default class ControlPanel extends Component {
    render() {
        return (
            <div>
                {
                    controller.getDataKeys().map(caption => (<Counter key={ caption } caption={ caption } />))
                }
                <Summary />
            </div>
        )
    }
}
