import React, { Component } from 'react'

const buttonStyle = {
    margin: '10px'
}

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.value,
        }
    }
    onClickIncrement = () => {
        const prevValue = this.state.value
        const curValue = this.state.value + 1
        this.setState({
            value: curValue,
        })
        this.props.onCounterUpdate(curValue, prevValue)
    }
    onClickDecrement = () => {
        const prevValue = this.state.value
        const curValue = this.state.value - 1
        this.setState({
            value: curValue,
        })
        this.props.onCounterUpdate(curValue, prevValue);
    }
    render() {
        const { caption } = this.props
        return (
            <div>
                <input style={ buttonStyle } type='button' value='-' onClick={ this.onClickDecrement } />
                <input style={ buttonStyle }  type='button' value='+' onClick={ this.onClickIncrement } />
                <span> { caption } Count: { this.state.value } </span>
            </div>
        )
    }
}
