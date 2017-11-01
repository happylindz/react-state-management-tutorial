import React, { Component } from 'react'
import CounterStore from '../store/CounterStore'
import actionCreator from '../actionCreator'

const buttonStyle = {
    margin: '10px'
}

export default class Counter extends Component {
    constructor(props) {
        super(props)
        const { caption } = this.props
        this.state = {
            value: CounterStore.getCounterValue(caption)
        }
    }

    onHandleClickChange = (isIncrement) => {
        const { caption } = this.props
        if(isIncrement) {
            actionCreator.increment(caption)   
        }else {
            actionCreator.decrement(caption)
        }
    }

    onCounterUpdate = () => {
        const { caption } = this.props
        this.setState({
            value: CounterStore.getCounterValue(caption)
        })
    }
    
    componentDidMount() {
        CounterStore.onChange(this.onCounterUpdate)
    }

    render() {
        const { caption } = this.props
        return (
            <div>
                <input style={ buttonStyle } type='button' value='-' onClick={ this.onHandleClickChange.bind(this, false) } />
                <input style={ buttonStyle }  type='button' value='+' onClick={ this.onHandleClickChange.bind(this, true) } />
                <span> { caption } Count: { this.state.value } </span>
            </div>
        )
    }
}
