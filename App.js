// react-native modules and core components
import React, { Component } from 'react';
import { Button, StyleSheet, View, Vibration } from 'react-native';
// custom components
import Header from './components/header';
import CountingCard from './components/countingCard';
// custom styles
import cardStyles from './styles/cardStyles';
import buttonStyles from './styles/buttonStyles';

export default class App extends Component {
  constructor() {
    super();
    this.state = { toggleCounterCard: false };
    // uncomment binding if toggle count is changed to a regular function definition
    // this.toggleCount = this.toggleCount.bind(this);
  }
  // toggle counter initiates the mounting and unmounting lifecycle methods for countingCard
  // App's render will be called after toggleCount due to change in App's View component
  toggleCount = () => {
    const startStop = this.state.toggleCounterCard ? 'Stop' : 'Start';
    console.log(`Toggle Count: ${startStop} Counting!`)
    this.setState(state => ({
      toggleCounterCard: !state.toggleCounterCard,
    }));
    Vibration.vibrate(1);
  }
  render() {
    console.log('App: Render');
    const btnColor = !this.state.toggleCounterCard ? '#A3BE8C' : '#D08770';
    return (
      <View style={styles.container} >
        <Header name="Lifecycle Demo" />
        <View style={cardStyles.cardContainer}>
          {this.state.toggleCounterCard && <CountingCard text="I'm a prop passed from App!" />}
          {!this.state.toggleCounterCard && <View style={cardStyles.closedCard} />}
        </View>
        <View style={buttonStyles.buttonContainer}>
          <Button
            style={buttonStyles.button}
            color={btnColor}
            title={this.state.toggleCounterCard ? "Stop Count" : "Start Count"}
            onPress={this.toggleCount} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECEFF4',
    alignItems: 'center',
    flex: 1,
  },
});
