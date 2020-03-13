import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
// custom styles
import headerStyles from '../styles/headerStyles';
import nordColors from '../Constants/nordColors';

export default class Header extends Component {
    render() {
        return (
            <View style={headerStyles.headerContainer}>
                <Text style={styles.text}>{this.props.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: nordColors.snowStormLight,
        fontSize: 24,
    }
});