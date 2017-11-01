import React, { Component } from 'react'
import Counter from './Counter'
import Summary from './Summary'
import store from '../store'


export default class ControlPanel extends Component {
    render() {
        const captions = Object.keys(store.getState())
        return (
            <div>
                {
                    captions.map(caption => ( <Counter caption={ caption } key={ caption } />))
                }
                <Summary />
            </div>
        )
    }
}
