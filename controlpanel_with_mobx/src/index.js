import React from 'react'
import { render } from 'react-dom'
import ControlPanel from './views/ControlPanel'
import * as stores from './store'
import { Provider } from 'mobx-react'


render(
    <Provider { ...stores }> 
        <ControlPanel />
    </Provider>,
    document.getElementById('root')
)

