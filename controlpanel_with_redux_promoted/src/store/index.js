import { createStore } from 'redux'
import reducers from '../reducers'

const initValues = {
    'First': 0,
    'Second': 10,
    'Third': 20,
}
const store = createStore(reducers, initValues)

export default store