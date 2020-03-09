import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import cardStyles from '../styles/cardStyles';

const Card = (props) => {
    return (
        <View style={cardStyles.Card}>
            <Text style={{ fontSize: 48, color: '#D8DEE9' }}>{props.text}</Text>
        </View >
    )
}

export default Card;