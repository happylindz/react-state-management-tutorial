import React, { Component } from 'react'

export default class Summary extends Component {
    render() {
        const { value } = this.props;
        return (
            <div>
                <hr />
                <div>Total Count: { value }</div>
            </div>
        )
    }
}
