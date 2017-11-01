import React, { Component } from 'react'
import store from '../store'

export default class Summary extends Component {

    constructor(props) {
        super(props)
        this.state = {
           ...this.getOwnState()
        }
    }

    getOwnState = () => {
        const state = store.getState()
        let sum = 0
        for (const key in state) {
            if (state.hasOwnProperty(key)) {
                sum += state[key]
            }
        }
        return { value: sum }
    }

    onCounterUpdateTotal = () => {
        this.setState({
            ...this.getOwnState()
        })
    }
    
    componentDidMount() {
        store.subscribe(this.onCounterUpdateTotal)
    }
 
    render() {
        const { value } = this.state;
        return (
            <div>
                <hr />
                <div>Total Count: { value }</div>
            </div>
        )
    }

}
