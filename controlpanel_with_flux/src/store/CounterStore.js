const counterData = {
    'First': 0,
    'Second': 10,
    'Third': 20,
}

const events = []

const CounterStore = {
    incrementCounter: caption => {
        counterData[caption]++
    },
    decrementCounter: caption => {
        counterData[caption]--
    },
    onChange: callback => {
        events.push(callback)
    },
    emitChange: () => {
        for(let i = 0; i < events.length; i++) {
            events[i]()
        }
    },
    getCounterValue: caption => {
        return counterData[caption]
    },
    getCounterKeys: () => {
        return Object.keys(counterData)
    },
}



export default CounterStore
