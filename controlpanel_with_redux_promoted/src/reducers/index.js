import * as actionTypes from '../actionTypes'

export default (state, action) => {
    const { counterCaption } = action
    switch(action.type) {
        case actionTypes.INCREMENT:
            return { ...state, [counterCaption]: state[counterCaption] + 1 }
        case actionTypes.DECREMENT:
            return { ...state, [counterCaption]: state[counterCaption] - 1 }
        default:
            return { ...state } 
    }
}