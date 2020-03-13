import React, { Component } from 'react';
import { Button, StyleSheet, View, Vibration } from 'react-native';
// custom components
import Header from './components/header';
import CountingCard from './components/countingCard';
// custom styles
import cardStyles from './styles/cardStyles';
import buttonStyles from './styles/buttonStyles';
import nordColors from './Constants/nordColors';

export default class App extends Component {

  state = { toggleCounterCard: false };

  // toggleCount initiates the mounting and unmounting lifecycle methods for countingCard component
  // App's render will be called after toggleCount due to change in App's View component
  // Additional notes: binding functions to component instance: https://reactjs.org/docs/faq-functions.html
  toggleCount = () => {
    const startStop = this.state.toggleCounterCard ? 'Stop' : 'Start';
    console.log(`Toggle Count: ${startStop} Counting!`)
    this.setState(state => ({ toggleCounterCard: !state.toggleCounterCard }));
    Vibration.vibrate(1);
  }

  // let's inspect ./components/countingCard.js to see what happens after render is called by App
  render() {
    console.log('App: Render');
    const btnColor = !this.state.toggleCounterCard ? nordColors.auroraGreen : nordColors.auroraRed;
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
    backgroundColor: nordColors.snowStormLight,
    alignItems: 'center',
    flex: 1,
  },
});
