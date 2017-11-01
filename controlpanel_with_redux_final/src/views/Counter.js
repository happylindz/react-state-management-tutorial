import React from 'react'
import actionCreator from '../actionCreator'
import { connect } from '../connect'

const buttonStyle = {
    margin: '10px'
}

const Counter = ({ caption, value, increment, decrement }) => {
    console.log(caption)
    return (
        <div>
            <button style={ buttonStyle } onClick={ decrement }>-</button>
            <button style={ buttonStyle } onClick={ increment }>+</button>
             { caption } Count: { value }
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {    
        caption: ownProps.caption,
        value: state[ownProps.caption]
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: () => {
            dispatch(actionCreator.increment(ownProps.caption))
        },
        decrement: () => {
            dispatch(actionCreator.decrement(ownProps.caption))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);