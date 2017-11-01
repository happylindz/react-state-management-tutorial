import React, { Component } from 'react'
import { observer, inject } from "mobx-react";

const buttonStyle = {
    margin: '10px'
}

@inject('counterStore')
@observer
class Counter extends Component {

    render() {
        const store = this.props.counterStore
        const { caption } = this.props
        return (
            <div>
                <input style={ buttonStyle } type='button' value='-' onClick={ store.changeCounter.bind(this, caption, 'decrement') } />
                <input style={ buttonStyle }  type='button' value='+' onClick={ store.changeCounter.bind(this, caption, 'increment') } />
                <span> { caption } Count: { store.counters[caption] } </span>
            </div>
        )
    }
}

export default Counter