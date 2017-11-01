import React from 'react'
import { connect } from '../connect'

const Summary = ({ value }) => (
    <div>
        <hr />
        Total Count: { value }
    </div>
)

const mapStateToProps = (state, ownProps) => {
    let total = 0
    for(let key in state) {
        if(state.hasOwnProperty(key)) {
            total += state[key]
        }
    } 
    return {
        value: total
    }
}


export default connect(mapStateToProps)(Summary)