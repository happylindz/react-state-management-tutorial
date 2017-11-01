import React, { Component } from 'react'
import store from '../store'
import actionCreator from '../actionCreator'

const buttonStyle = {
    margin: '10px'
}

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = this.getOwnState()        
    }
    getOwnState() {
        return {
            value: store.getState()[this.props.caption]
        }
    }
    onHandleClickChange = (isIncrement) => {
        const { caption } = this.props
        if(isIncrement) {
            store.dispatch(actionCreator.increment(caption))
        }else {
            store.dispatch(actionCreator.decrement(caption))
        }
    }

    onCounterUpdate = () => {
        this.setState({
            ...this.getOwnState()
        })
    }
    
    componentDidMount() {
        store.subscribe(this.onCounterUpdate)
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
