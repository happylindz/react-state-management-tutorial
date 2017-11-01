import React from 'react'
import { connect } from 'react-redux'
import actionCreator from '../actionCreator'

const buttonStyle = {
    margin: '10px'
};

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


const mapStateToProps = (state, ownProps) => {
    return {
        value: state[ownProps.caption],
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onHandleClickChange: (isIncrement) => {
            if(isIncrement) {
                dispatch(actionCreator.increment(ownProps.caption))
            }else {
                dispatch(actionCreator.decrement(ownProps.caption))
            }
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)