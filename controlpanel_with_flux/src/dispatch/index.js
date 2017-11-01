import { Dispatcher } from 'flux'
import * as actionTypes from '../actionTypes'
import CounterStore from '../store/CounterStore'
import SummaryStore from '../store/SummaryStore'

const dispatcher = new Dispatcher()

CounterStore.dispatchToken = dispatcher.register((action) => {
    switch(action.type) {
        case actionTypes.INCREMENT:
            CounterStore.incrementCounter(action.counterCaption)
            CounterStore.emitChange()
            break
        case actionTypes.DECREMENT:
            CounterStore.decrementCounter(action.counterCaption)
            CounterStore.emitChange()
            break
        default:
            break
    }
})

SummaryStore.dispatchToken = dispatcher.register((action) => {
    if(actionTypes.INCREMENT === action.type || actionTypes.DECREMENT === action.type) {
        dispatcher.waitFor([CounterStore.dispatchToken])
        SummaryStore.emitChange()
    }
})  


export default dispatcher

