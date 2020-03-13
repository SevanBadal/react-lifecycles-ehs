import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import cardStyles from '../styles/cardStyles';
import nordColors from '../Constants/nordColors';

// function components: https://reactjs.org/docs/components-and-props.html
const Card = (props) => {
    return (
        <View style={cardStyles.Card}>
            <Text style={{ fontSize: 48, color: nordColors.snowStormLight }}>{props.text}</Text>
        </View >
    )
}

export default Card;