import React from 'react'
import { render } from 'react-dom'
import Provider from './Provider'
import store from './store'
import ControlPanel from './views/ControlPanel'

render(
    <Provider store={ store }>
        <ControlPanel />
    </Provider>,
    document.getElementById('root')
)