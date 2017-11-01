import React from 'react'
import { connect } from 'react-redux'


const Summary = (props) => {
    const { value } = props
    return (
        <div>
            <hr />
            Total Count: { value }
        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
    let total = 0;
    for(const key in state) {
        if(state.hasOwnProperty(key)) {
            total += state[key]
        }
    }
    return {
        value: total
    }
}

export default connect(mapStateToProps)(Summary)