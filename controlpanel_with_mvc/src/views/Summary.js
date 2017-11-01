import React, { Component } from 'react'
import controller from '../controller'

export default class Summary extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: controller.getTotalValues()
        }
    }

    onCounterUpdateTotal = () => {
        this.setState({
            value: controller.getTotalValues()
        })
    }
    
    componentDidMount() {
        controller.onChange(this.onCounterUpdateTotal)
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
