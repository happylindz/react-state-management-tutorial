import CounterStore from './CounterStore'

const events = []

const SummaryStore = {
    onChange: (callback) => {
        events.push(callback)
    },
    emitChange: () => {
        for(let i = 0; i < events.length; i++) {
            events[i]()
        }
    },
    getTotalValues: () => {
        const keys = CounterStore.getCounterKeys()
        let total = 0
        for(let i = 0; i < keys.length; i++) {
            total += CounterStore.getCounterValue(keys[i])
        }
        return total
    },
}



export default SummaryStore