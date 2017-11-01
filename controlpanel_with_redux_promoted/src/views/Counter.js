import React, { Component } from 'react'
import actionCreator from '../actionCreator'
import PropTypes from 'prop-types'

const buttonStyle = {
    margin: '10px'
}

const Counter = (props) => {
    const { caption, onHandleClickChange, value } = props
    return (
        <div>
            <input style={ buttonStyle } type='button' value='-' onClick={ () => onHandleClickChange(false) } />
            <input style={ buttonStyle }  type='button' value='+' onClick={ () => onHandleClickChange(true) } />
            <span> { caption } Count: { value } </span>
        </div>
    )
}

class CounterContainer extends Component {
    constructor() {
        super(...arguments)
        this.state = this.getOwnState()
    }
    getOwnState = () => {
        const { caption } = this.props   
        return {
            value: this.context.store.getState()[caption]
        }
    }

    onHandleClickChange = (isIncrement) => {
        const { caption } = this.props
        if(isIncrement) {
            this.context.store.dispatch(actionCreator.increment(caption))
        }else {
            this.context.store.dispatch(actionCreator.decrement(caption))
        }
    }

    onCounterUpdate = () => {
        this.setState(this.getOwnState())
    }
    
    componentDidMount() {
        this.context.store.subscribe(this.onCounterUpdate)
    }
    
    render() {
        return (
            <Counter 
                caption={ this.props.caption }
                onHandleClickChange={ this.onHandleClickChange }
                value={ this.state.value }
             />
        )
    }
}

CounterContainer.contextTypes = {
    store: PropTypes.object
}

export default CounterContainer