import React, { Component } from 'react'
import controller from '../controller'

const buttonStyle = {
    margin: '10px'
}

export default class Counter extends Component {
    constructor(props) {
        super(props)
        const { caption } = this.props
        this.state = {
            value: controller.getCounterValue(caption)
        }
    }

    onHandleClickChange = (isIncrement) => {
        const { caption } = this.props
        let value = isIncrement ? this.state.value + 1 : this.state.value - 1
        controller.setCounterValue(caption, value)
    }

    onCounterUpdate = () => {
        const { caption } = this.props
        this.setState({
            value: controller.getCounterValue(caption)
        })
    }
    
    componentDidMount() {
        controller.onChange(this.onCounterUpdate)
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
