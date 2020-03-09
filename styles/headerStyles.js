import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const headerStyles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        backgroundColor: '#2E3440',
        height: '12%',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        width: '100%',
        // ios shadow
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10, },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        // andriod shadow
        elevation: 2,
    },
});

export default headerStyles;