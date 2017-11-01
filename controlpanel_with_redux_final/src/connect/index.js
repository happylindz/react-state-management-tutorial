
import React, { Component } from 'react'
import PropTypes from 'prop-types'

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}
const map = new WeakMap()

export const connect = (mapStateToProps, mapDispatchToProps) => {
    mapStateToProps = mapStateToProps || function() { return {} }
    mapDispatchToProps = mapDispatchToProps || function() { return {} }
    return (WrappedComponent) => {
        const HOCComponent = class extends Component {
            constructor() {
                super(...arguments)
                this.state = {};
            }
            onChange = () => {
                this.setState({})
            }
            shouldComponentUpdate(nextProps, nextState) {
                return map.get(this).value !== mapStateToProps(this.context.store.getState(), nextProps).value
            }
            componentDidMount() {
                this.context.store.subscribe(this.onChange)
            }
            render() {
                const store = this.context.store
                const stateToProps = mapStateToProps(store.getState(), this.props)
                const newProps = {
                    ...this.props,
                    ...stateToProps,
                    ...mapDispatchToProps(store.dispatch, this.props)
                }
                map.set(this, stateToProps)
                return <WrappedComponent  { ...newProps } />
            }
        }
        HOCComponent.contextTypes = {
            store: PropTypes.object
        }
        HOCComponent.displayName = `Connect(${getDisplayName(WrappedComponent)})`
        return HOCComponent;
    }
}