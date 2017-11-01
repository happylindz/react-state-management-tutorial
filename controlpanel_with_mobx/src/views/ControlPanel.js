import React, { Component } from 'react'
import Counter from './Counter'
import Summary from './Summary'
import { observer, inject } from "mobx-react";



@inject('counterStore')
@observer
export default class ControlPanel extends Component {
    render() {
        const store = this.props.counterStore
        return (
            <div>
                {
                    store.dataKeys.map( caption => (<Counter key={ caption } caption={caption} />))
                }
                <Summary />
            </div>
        )
    }
}
