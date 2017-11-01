import React, { Component } from 'react'
import { observer, inject } from "mobx-react";

@inject('counterStore')
@observer
export default class Summary extends Component {
    render() {
        const store = this.props.counterStore
        return (
            <div>
                <hr />
                <div>Total Count: { store.totalValue }</div>
            </div>
        )
    }
}
