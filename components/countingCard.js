import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import cardStyles from '../styles/cardStyles';
import Card from './card';

export default class CountingCard extends Component {
    // 1. Mounting Methods
    constructor() {
        super();
        this._isMounted = false;
        this.state = {
            isUpdatingText: true,
            counter: 0,
        }
        console.log('1. CountingCard: constructor');
    }
    render() {
        console.log('2. CountingCard: render');
        return (
            <Card text={this.state.counter} />
        )
    }
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

    // 2. Updating Methods:
    shouldComponentUpdate(nextProp, nextState) {
        const yesNo = nextState.counter % 2 == 0 ? 'Yes' : 'No';
        console.log(`1. CountingCard: shouldComponentUpdate - ${yesNo}`);

        return nextState.counter % 2 === 0;
    }
    componentDidUpdate(prevProp, prevState) {
        console.log('3. CountingCard: componentDidUpdate');
    }
    // 3. Unmounting method
    componentWillUnmount() {
        this._isMounted = false;
        console.log('CountingCard: componentWillUnmount');
    }
    // 4. error handling - https://reactjs.org/docs/error-boundaries.html
    componentDidCatch(error, info) {
        console.log('CountingCard: componentDidCatch');
    }
}