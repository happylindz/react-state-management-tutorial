import * as actionTypes from '../actionTypes'


export default {
    increment: (caption) => {
        return {
            type: actionTypes.INCREMENT,
            counterCaption: caption,
        }
    },
    decrement: (caption) => {
        return {
            type: actionTypes.DECREMENT,
            counterCaption: caption,
        }
    }
}