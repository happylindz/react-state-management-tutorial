import React, { Component } from 'react'
import Counter from './Counter'
import Summary from './Summary'
import CounterStore from '../store/CounterStore'


export default class ControlPanel extends Component {
    render() {
        return (
            <div>
                { 
                    CounterStore.getDataKeys().map(caption => (<Counter key={ caption } caption={ caption } />))
                }
                <Summary />
            </div>
        )
    }
}
