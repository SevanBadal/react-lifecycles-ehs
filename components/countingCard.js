import React, { Component } from 'react';
// custom components
import Card from './card';

export default class CountingCard extends Component {
    // Mounting Methods
    // constructor: the first method called - it happens before the UI is updated
    constructor() {
        super();
        this._isMounted = false;
        this.state = {
            isUpdatingText: true,
            counter: 0,
        }
        console.log('1. CountingCard: constructor');
    }
    // render: called after constructor, it examines props and state in order to create a return value
    render() {
        console.log('2. CountingCard: render');
        return (
            <Card text={this.state.counter} />
        )
    }
    // componentDidMount: called after render - we can perform async tasks here to update state 
    componentDidMount() {
        this._isMounted = true;
        console.log('3. CountingCard: componentDidMount');
        // toggle state every second
        this._isMounted && setInterval(() => (
            this._isMounted && this.setState(previousState => ({
                isUpdatingText: !previousState.isUpdatingText,
                counter: previousState.counter + 1,
            }))
        ), 1000);
    }

    // Updating Methods
    // shouldComponentUpdate: called after a change in prop/state - we can decide to rerender the component here
    shouldComponentUpdate(nextProp, nextState) {
        const yesNo = nextState.counter % 2 == 0 ? 'Yes' : 'No';
        console.log(`1. CountingCard: shouldComponentUpdate - ${yesNo}`);

        return nextState.counter % 2 === 0;
    }
    // componentDidUpdate: called if shouldComponentUpdate returns true
    componentDidUpdate(prevProp, prevState) {
        console.log('3. CountingCard: componentDidUpdate');
    }
    // Unmounting methods
    // componentWillUnmount: called when the component is destroyed - it's no longer a part of the UI
    componentWillUnmount() {
        this._isMounted = false;
        console.log('CountingCard: componentWillUnmount');
    }
    // 4. error handling - https://reactjs.org/docs/error-boundaries.html
    componentDidCatch(error, info) {
        console.log('CountingCard: componentDidCatch');
    }
}