import React, { Component } from 'react'
import Counter from './Counter'
import Summary from './Summary'
import { connect } from 'react-redux'



class ControlPanel extends Component {
    render() {
        return (
            <div>
                {
                    this.props.captions.map(caption => (<Counter caption={ caption } key={ caption } />))
                }
                <Summary />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        captions: Object.keys(state)
    }
}

export default connect(mapStateToProps)(ControlPanel)