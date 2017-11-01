import { counterData } from '../modal'

const events = []

const controller = {
    onChange: (callback) => {
        events.push(callback)
    },
    emitChange: () => {
        for(let i = 0; i < events.length; i++) {
            events[i]()
        }
    },
    setCounterValue: (caption, value) => {
        counterData[caption] = value
        controller.emitChange()
    },
    getCounterValue: caption => {
        return counterData[caption]
    },
    getTotalValues: () => {
        let total = 0
        for(let key in counterData) {
            if(counterData.hasOwnProperty(key)) {
                total += counterData[key]                
            }
        }
        return total
    },
}

export default controller;