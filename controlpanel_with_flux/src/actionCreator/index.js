import * as actionTypes from '../actionTypes'
import AppDispatcher from '../dispatch'

export default {
    increment: (counterCaption) => {
        AppDispatcher.dispatch({
            type: actionTypes.INCREMENT,
            counterCaption: counterCaption,
        })
    },
    decrement: (counterCaption) => {
        AppDispatcher.dispatch({
            type: actionTypes.DECREMENT,
            counterCaption: counterCaption,
        })
    }
}