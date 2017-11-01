import React, { Component } from 'react'
import Counter from './Counter'
import Summary from './Summary'

export default class ControlPanel extends Component {
    constructor(props) {
        super(props)
        this.initValues = {
            'First': 0,
            'Second': 10,
            'Third': 20,
        }
        this.state = {
            sum: this.getTotalCounterValues()
        }
    }
    
    getTotalCounterValues = () => {
        let total = 0
        for(let key in this.initValues) {
            if(this.initValues.hasOwnProperty(key)) {
                total += this.initValues[key]
            }
        }
        return total
    }

    onCounterUpdate = (newValue, prevValue) => {
        const diff = newValue - prevValue;
        this.setState({
            sum: this.state.sum + diff
        })
    }
    render() {
        return (
            <div>
                <Counter caption={ 'First' } value={ this.initValues['First'] } onCounterUpdate={ this.onCounterUpdate }   />
                <Counter caption={ 'Second' } value={ this.initValues['Second'] } onCounterUpdate={ this.onCounterUpdate }   />
                <Counter caption={ 'Third' } value={ this.initValues['Third'] } onCounterUpdate={ this.onCounterUpdate }   />
                <Summary value={ this.state.sum }  />
            </div>
        )
    }
}
