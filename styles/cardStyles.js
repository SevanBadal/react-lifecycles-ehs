import { StyleSheet } from 'react-native';
import nordColors from '../Constants/nordColors';
const cardStyles = StyleSheet.create({
    Card: {
        borderTopEndRadius: 100,
        borderBottomLeftRadius: 100,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 8,
        width: '50%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
        backgroundColor: nordColors.frostGreen,
        // ios shadow
        shadowColor: nordColors.polarNightDarker,
        shadowOffset: { width: 12, height: 10, },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        // andriod shadow
        elevation: 5,
    },
    closedCard: {
        width: '10%',
        height: 10,
        backgroundColor: nordColors.polarNightDark,
    },
    cardContainer: {
        alignItems: "center",
        justifyContent: "space-around",
        flex: 1,
        width: '100%',
    },
});

export default cardStyles;